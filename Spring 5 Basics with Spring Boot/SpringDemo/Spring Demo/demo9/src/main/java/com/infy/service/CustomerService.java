package com.infy.service;

import java.util.List;

import com.infy.dto.CustomerDTO;

public interface CustomerService {
	public String createCustomer(CustomerDTO customerDTO);

	public List<CustomerDTO> fetchCustomer();

	public String updateCustomer(long phoneNumber, CustomerDTO customerDTO);

	public String deleteCustomer(long phoneNumber);

}
