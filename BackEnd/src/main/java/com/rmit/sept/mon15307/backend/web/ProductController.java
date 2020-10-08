package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import com.rmit.sept.mon15307.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @GetMapping("")
    public ResponseEntity<?> listProducts() {
        Map<String, Iterable<Product>> response = new HashMap<>();
        Iterable<Product> products = productService.findAllProducts();
        response.put("products", products);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> createProduct(
        @Valid
        @RequestBody
            Product product,
        BindingResult result,
        @AuthenticationPrincipal
            UserAccount user
    ) {
        // TODO: document API endpoint
        // TODO: restrict to admin
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        try {
            Product newProduct = productService.saveOrUpdateProduct(product);
            return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
        } catch (org.springframework.dao.DataIntegrityViolationException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
}
