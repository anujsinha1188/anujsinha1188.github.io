package com.infy.service;

import com.infy.repository.CustomerRepository;

public class CustomerServiceImpl implements CustomerService{

	private int count;
	private CustomerRepository repository;

	public CustomerServiceImpl(CustomerRepository repository, int count) {
		super();
		this.count = count;
		this.repository = repository;
	}

	public String fetchCustomer() {
		return repository.fetchCustomer(count);
	}

	public String createCustomer() {
		return repository.createCustomer();
	}

}
