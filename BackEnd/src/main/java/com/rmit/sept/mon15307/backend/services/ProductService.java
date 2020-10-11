package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.ProductRepository;
import com.rmit.sept.mon15307.backend.exceptions.ProductNotFoundException;
import com.rmit.sept.mon15307.backend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Iterable<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public Product saveOrUpdateProduct(Product product) {
        return productRepository.save(product);
    }

    public Product findByProductId(String productId) {
        Product product = productRepository.findByProductId(Long.parseLong(productId));

        if (product == null) {
            // TODO: custom exception
            throw new ProductNotFoundException("Product ID '" + productId + "' not found");
        }

        return product;
    }
}
