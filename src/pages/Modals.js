import React, { useState } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'


//for modal
import { Select } from 'antd';

const { Option } = Select;

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <>
      <PageTitle>Modals</PageTitle>
      <CTA />

      <div>
        <Button onClick={openModal}>Open modal</Button>
      </div>

      {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
          voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button>Accept</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal> */}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="text-center text-3xl">Staff Task Assignment</ModalHeader>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
        <ModalHeader>Staff Lists</ModalHeader>
        <ModalBody>
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>,
         </ModalBody>
        </div>
        <div className="col-span-1">
        <ModalHeader>Staff Details</ModalHeader>
        <ModalBody>
            <h3>Staff Name:</h3>
            <p>Status: </p>
            <p>Address:</p>
            <p>Email: </p>
            <p>Region: </p>
            <p>Contact: </p>
         </ModalBody>
        </div>
        </div>

        {/* <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
          voluptatem tempore!
          
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
          voluptatem tempore!

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
          voluptatem tempore!
         </ModalBody> */}
        <ModalFooter>
          
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button>Assign</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Modals
