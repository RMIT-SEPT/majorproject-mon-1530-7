package com.rmit.sept.mon15307.backend.Repositories;

import com.rmit.sept.mon15307.backend.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
    Product findByIdEquals(Long productId);
}