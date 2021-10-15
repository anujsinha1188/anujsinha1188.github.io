package com.infy.service;

import com.infy.repository.CustomerRepository;

public class CustomerServiceImpl implements CustomerService {

	private int count;
	private CustomerRepository repository;

	public CustomerServiceImpl() {
	}

	public void setCount(int count) {
		this.count = count;
	}

	public void setRepository(CustomerRepository repository) {
		this.repository = repository;
	}

	public String fetchCustomer() {
		return repository.fetchCustomer(count);
	}

	public String createCustomer() {
		return repository.createCustomer();
	}

}
