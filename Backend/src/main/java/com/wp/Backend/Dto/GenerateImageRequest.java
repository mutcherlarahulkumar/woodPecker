package com.wp.Backend.Dto;

public class GenerateImageRequest {
    private double length;
    private double height;
    private String unit;
    private boolean loft;
    private double horizontalPartitions;

    public double getHorizontalPartitions() {
        return horizontalPartitions;
    }

    public void setHorizontalPartitions(double horizontalPartitions) {
        this.horizontalPartitions = horizontalPartitions;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public boolean isLoft() {
        return loft;
    }

    public void setLoft(boolean loft) {
        this.loft = loft;
    }
}
