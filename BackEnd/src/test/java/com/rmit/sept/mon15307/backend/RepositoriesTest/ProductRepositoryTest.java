package com.rmit.sept.mon15307.backend.RepositoriesTest;

import com.rmit.sept.mon15307.backend.Repositories.ProductRepository;
import com.rmit.sept.mon15307.backend.model.Product;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository proRepoTest;

    Product testProduct;
    Long testID;

    @Before
    public void init() {
        testProduct = new Product();
        testID = testProduct.getId();
    }

    @After
    public void tearDown() throws Exception {
        proRepoTest.deleteAll();
    }

    @Test
    public void saveAndFetchProductbyId() throws Exception {
        proRepoTest.save(testProduct);

        Product repoTest = proRepoTest.findByIdEquals(testID);

        assertEquals(repoTest, testProduct);
    }
}