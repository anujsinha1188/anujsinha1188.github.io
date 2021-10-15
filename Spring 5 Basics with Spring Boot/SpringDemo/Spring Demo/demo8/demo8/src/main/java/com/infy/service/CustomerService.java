package com.infy.service;

import com.infy.dto.CustomerDTO;

public interface CustomerService {

	public String createCustomer(CustomerDTO dto);

	public String fetchCustomer();

	public void deleteCustomer(long phoneNumber) throws Exception;
}