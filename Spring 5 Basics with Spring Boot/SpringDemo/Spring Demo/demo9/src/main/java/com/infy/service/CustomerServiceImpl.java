package com.infy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dto.CustomerDTO;
import com.infy.repository.CustomerRepository;

@Service("customerService")
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	public String createCustomer(CustomerDTO customerDTO) {
		customerRepository.createCustomer(customerDTO);

		return "Customer with " + customerDTO.getPhoneNo() + " added successfully";
	}

	public List<CustomerDTO> fetchCustomer() {
		// uncomment the below line to see the AfterThrowing advice
		// int b=10/0;
		return customerRepository.fetchCustomer();
	}

	public String updateCustomer(long phoneNumber, CustomerDTO customerDTO) {

		return customerRepository.updateCustomer(phoneNumber, customerDTO);
	}

	public String deleteCustomer(long phoneNumber) {

		return customerRepository.deleteCustomer(phoneNumber);
	}
}
