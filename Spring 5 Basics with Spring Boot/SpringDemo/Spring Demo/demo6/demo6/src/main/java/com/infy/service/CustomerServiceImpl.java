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
		return customerRepository.fetchCustomer();
	}

}
