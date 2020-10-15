package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.ProductRepository;
import com.rmit.sept.mon15307.backend.exceptions.InvalidProductException;
import com.rmit.sept.mon15307.backend.exceptions.ProductNotFoundException;
import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.payload.AdminSetProducts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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

    // Checks if all product ids specified in admin editing services request
    // currently exist in the system
    public void checkNonExistentProductIds(Iterable<Product> allProducts,
                                              AdminSetProducts productsSet){
        // Creates list containing all product ids in the system
        List<Long> allProductIds = new ArrayList<>();
        for(Product product: allProducts){
            allProductIds.add(Long.parseLong(product.getId()));
        }
        // Checks if all product ids in set of specified ids exist in the system
        for(Long specifiedProductId: productsSet.getProductIds()){
            if(!allProductIds.contains(specifiedProductId)){
                throw new InvalidProductException("Product " + specifiedProductId + " not recognised");
            }
        }
    }

    // Returns list of products specified by admin for service editing
    public List<Product> updatedProducts(AdminSetProducts productsSet, UserAccount user){
        // User needs proper authority to perform service editing.
        // In this case, user must only be an admin
        boolean isAdmin = user.getAdmin();
        if (!isAdmin){
//            throw new NotAuthorisedException("User not authorised.");
            throw new InvalidProductException("User not authorised");
            // ADD ABOVE CODE AFTER RELEVANT BRANCH IS MERGED!!
        }
        // Create list with products corresponding to product ids specified
        List<Product> updatedProducts = new ArrayList<>();
        for(Long specifiedProductId: productsSet.getProductIds()){
            Product specifiedProduct = findByProductId(String.valueOf(specifiedProductId));
            updatedProducts.add(specifiedProduct);
        }
        // User needs proper authority to confirm service edit request.
        // In this case, user must only be an admin
        boolean isAuthorisedAdminConfirmation = isAdmin && user.getAdmin();
        if(!isAuthorisedAdminConfirmation){
//            throw new UserNotAuthorisedException("User not authorised to make this change.")
            throw new InvalidProductException("User not authorised to make this change.");
            // ADD ABOVE CODE AFTER RELEVANT BRANCH IS MERGED!!
        }
        return updatedProducts;
    }
}
