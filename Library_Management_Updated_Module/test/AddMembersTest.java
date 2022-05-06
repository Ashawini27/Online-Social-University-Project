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
public class AddMembersTest {
    
    public AddMembersTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }

    /**
     * Test of isPasswordCorrect method, of class AddMembers.
     */
    @Test
    public void testIsPasswordCorrect() {
        System.out.println("isPasswordCorrect");
        AddMembers instance = new AddMembers();
        boolean expResult = false;
        boolean result = instance.isPasswordCorrect();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of isCorrect method, of class AddMembers.
     */
    @Test
    public void testIsCorrect() {
        System.out.println("isCorrect");
        AddMembers instance = new AddMembers();
        boolean expResult = false;
        boolean result = instance.isCorrect();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of clearTextField method, of class AddMembers.
     */
    @Test
    public void testClearTextField() {
        System.out.println("clearTextField");
        AddMembers instance = new AddMembers();
        instance.clearTextField();
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
