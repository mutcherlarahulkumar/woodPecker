import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRecoilState,useRecoilValue } from 'recoil'
import { PropareaAtom } from '../store/atoms/PropareaAtom'
import { PropsizeAtom } from "../store/atoms/PropsizeAtom"
import { ProptypeAtom } from '../store/atoms/ProptypeAtom'
import { BedroomsAtom } from '../store/atoms/BedroomsAtom'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownButton({option,options}) {
  let id =1;
  const [PropertyArea,setPropertyArea] = useRecoilState(PropareaAtom);
  const [PropertySize,setPropertySize] = useRecoilState(PropsizeAtom);
  const [PropertyType,setPropertyType] = useRecoilState(ProptypeAtom);
  const [Bedrooms,setBedrooms] = useRecoilState(BedroomsAtom);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-500">
          {option}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map(createmenuitem)}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )

  function createmenuitem(item){
    return (
      <div key={id++}>
        <Menu.Item>
              {({ active }) => (
                <a
                  onClick={()=>{
                    if(option == 'Property Area'){
                      setPropertyArea(item);
                    }
                    if(option == 'Property Size'){
                      setPropertySize(item);
                    }
                    if(option == 'Property Type'){
                      setPropertyType(item);
                    }
                    if(option == 'Bedrooms'){
                      setBedrooms(item);
                    }
                  }}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {item}
                </a>
              )}
            
            </Menu.Item>
      </div>
    )
  }
}
