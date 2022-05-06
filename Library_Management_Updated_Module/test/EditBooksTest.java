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
public class EditBooksTest {
    
    public EditBooksTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }

    /**
     * Test of isCorrect method, of class EditBooks.
     */
    @Test
    public void testIsCorrect() {
        System.out.println("isCorrect");
        EditBooks instance = new EditBooks();
        boolean expResult = false;
        boolean result = instance.isCorrect();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of isEditCorrect method, of class EditBooks.
     */
    @Test
    public void testIsEditCorrect() {
        System.out.println("isEditCorrect");
        EditBooks instance = new EditBooks();
        boolean expResult = false;
        boolean result = instance.isEditCorrect();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of clearTextField method, of class EditBooks.
     */
    @Test
    public void testClearTextField() {
        System.out.println("clearTextField");
        EditBooks instance = new EditBooks();
        instance.clearTextField();
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
