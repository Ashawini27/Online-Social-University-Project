/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ashwi
 */
public class BorrowBooksTest {
    
    public BorrowBooksTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }

    /**
     * Test of isCorrect method, of class BorrowBooks.
     */
    @Test
    public void testIsCorrect() {
        System.out.println("isCorrect");
        BorrowBooks instance = new BorrowBooks();
        boolean expResult = false;
        boolean result = instance.isCorrect();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of clearTextField method, of class BorrowBooks.
     */
    @Test
    public void testClearTextField() {
        System.out.println("clearTextField");
        BorrowBooks instance = new BorrowBooks();
        instance.clearTextField();
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
