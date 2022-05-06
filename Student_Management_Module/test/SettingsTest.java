/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import java.awt.Dimension;
import java.sql.Connection;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ashwi
 */
public class SettingsTest {
    
    public SettingsTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }

    /**
     * Test of getScreenSize method, of class Settings.
     */
    @Test
    public void testGetScreenSize() {
        System.out.println("getScreenSize");
        Dimension expResult = null;
        Dimension result = Settings.getScreenSize();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getDBConnection method, of class Settings.
     */
    @Test
    public void testGetDBConnection() {
        System.out.println("getDBConnection");
        Connection expResult = null;
        Connection result = Settings.getDBConnection();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
