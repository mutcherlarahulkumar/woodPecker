package com.wp.Backend.controller;
import com.wp.Backend.Dto.GenerateImageRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

@RestController
@CrossOrigin
@RequestMapping("api/v1/generate")
public class ImageGenerationController {

    private static final double CM_TO_FEET = 0.0328084;
    private static final double METER_TO_FEET = 3.28084;
    private static final double INCH_TO_FEET = 0.0833333;

    @PostMapping(value = "/bedroom", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] generateImage(@RequestBody GenerateImageRequest request) throws IOException {
        double length = request.getLength();
        double height = request.getHeight();
        String unit = request.getUnit();
        boolean hasLoft = request.isLoft();
        double horizontalPartitions = request.getHorizontalPartitions();

        // Example input dimensions and loft selection
        int numberOfHorizontalPartitions = (int) horizontalPartitions;
        int numberOfVerticalPartitions = (int) Math.floor(length / 2);

        // Colors for the wardrobe
        Color primaryColor = new Color(139, 69, 19);
        Color secondaryColor = new Color(210, 180, 140);
        Color loftPrimaryColor = new Color(160, 82, 45);
        Color loftSecondaryColor = new Color(245, 222, 179);
        Color handleColor = new Color(192, 192, 192);

        // Convert the input dimensions to feet
        double wallLengthFeet = convertToFeet(length, unit);
        double wallHeightFeet = convertToFeet(height, unit);

        // Loft height in feet
        int loftHeightFeet = hasLoft ? 2 : 0;

        // Scale factors for drawing (assuming 1 foot = 45 pixels horizontally and 70 pixels vertically)
        int horizontalScale = 45;
        int verticalScale = 70;

        // Create a new BufferedImage
        BufferedImage imageWithWardrobes = new BufferedImage(800, 600, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = imageWithWardrobes.createGraphics();

        // Determine the scaling factors to fit the wardrobes within the room image
        double scaleX = (double) imageWithWardrobes.getWidth() / (wallLengthFeet * verticalScale);
        double scaleY = (double) imageWithWardrobes.getHeight() / (wallHeightFeet * horizontalScale);

        // Calculate partition dimensions
        double horizontalPartitionHeightFeet = (wallHeightFeet - loftHeightFeet) / numberOfHorizontalPartitions;
        double verticalPartitionWidthFeet = wallLengthFeet / numberOfVerticalPartitions;
        int horizontalPartitionHeightPixels = (int) (horizontalPartitionHeightFeet * horizontalScale);
        int verticalPartitionWidthPixels = (int) (verticalPartitionWidthFeet * verticalScale);
        int loftHeightPixels = loftHeightFeet * verticalScale;

        // Draw the loft if specified
        if (loftHeightFeet > 0) {
            GradientPaint loftPaint = new GradientPaint(0, 0, loftPrimaryColor, (int) (wallLengthFeet * verticalScale * scaleX), (int) (loftHeightPixels * scaleY), loftSecondaryColor);
            g2d.setPaint(loftPaint);
            g2d.fillRect(0, 0, (int) (wallLengthFeet * verticalScale * scaleX), (int) (loftHeightPixels * scaleY));
            g2d.setColor(secondaryColor);
            g2d.drawRect(0, 0, (int) (wallLengthFeet * verticalScale * scaleX), (int) (loftHeightPixels * scaleY));
        }

        // Draw horizontal partitions (boxes)
        for (int i = 0; i < numberOfHorizontalPartitions; i++) {
            int y = (int) (loftHeightPixels * scaleY + i * horizontalPartitionHeightPixels * scaleY);
            for (int j = 0; j < numberOfVerticalPartitions; j++) {
                int x = (int) (j * verticalPartitionWidthPixels * scaleX);
                GradientPaint partitionPaint = new GradientPaint(x, y, primaryColor, x + (int) (verticalPartitionWidthPixels * scaleX), y + (int) (horizontalPartitionHeightPixels * scaleY), secondaryColor);
                g2d.setPaint(partitionPaint);
                g2d.fillRect(x, y, (int) (verticalPartitionWidthPixels * scaleX), (int) (horizontalPartitionHeightPixels * scaleY));
                g2d.setColor(secondaryColor);
                g2d.drawRect(x, y, (int) (verticalPartitionWidthPixels * scaleX), (int) (horizontalPartitionHeightPixels * scaleY));

                // Draw handles
                g2d.setColor(handleColor);
                int handleWidth = 10;
                int handleHeight = 20;
                int handleX = x + (int) (verticalPartitionWidthPixels * scaleX) - handleWidth - 5;
                int handleY = y + ((int) (horizontalPartitionHeightPixels * scaleY) / 2) - (handleHeight / 2);
                g2d.fillRect(handleX, handleY, handleWidth, handleHeight);
                g2d.setColor(Color.BLACK);
                g2d.drawRect(handleX, handleY, handleWidth, handleHeight);
            }
        }

        // Dispose the Graphics2D object
        g2d.dispose();

        // Write the image to a ByteArrayOutputStream
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ImageIO.write(imageWithWardrobes, "png", outputStream);

        // Return the image data as byte array
        return outputStream.toByteArray();
    }

    // Convert input dimensions to feet
    private double convertToFeet(double value, String unit) {
        switch (unit.toLowerCase()) {
            case "cm":
                return value * CM_TO_FEET;
            case "m":
                return value * METER_TO_FEET;
            case "inch":
                return value * INCH_TO_FEET;
            case "ft":
            default:
                return value;
        }
    }
}

