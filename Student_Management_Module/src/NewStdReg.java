

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class NewStdReg extends JInternalFrame implements ActionListener {

    private JPanel panel;
    private JButton btnSave,  btnCancel,  btnClear;
    private JLabel lblName,  lblAdNo,  lblPhNo,  lblSex,  lblFatherName,  lblOccupation;
    private JLabel lblMotherName,  lblDOB,  lblAge,  lblCaste,  lblReligion,  lblHouseName;
    private JLabel lblCity,  lblDistrict,  lblState,  lblPin,  lblYear,  lblQualification;
    private JTextField txtName,  txtAdNo,  txtPhNo,  txtFatherName,  txtOccupation;
    private JTextField txtMotherName,  txtDOB,  txtAge,  txtCaste,  txtReligion,  txtHouseName;
    private JTextField txtCity,  txtDistrict,  txtState,  txtPin,  txtYear,  txtQualification;
    private JComboBox cmbSex;
    private Connection con;
    private PreparedStatement ps;
    private Statement st;

    public NewStdReg() {
        super("New Student Registration", true, true, true, true);
        this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        this.setSize(1000, 1000);

        panel = new JPanel();
        lblAdNo = new JLabel("Admission no");
        lblName = new JLabel("Name");
        lblPhNo = new JLabel("Phone no");
        lblSex = new JLabel("Sex");
        lblFatherName = new JLabel("Father's name");
        lblOccupation = new JLabel("Occupation");
        lblMotherName = new JLabel("Mother's name");
        lblDOB = new JLabel("DOB");
        lblAge = new JLabel("Age");
        lblCaste = new JLabel("Caste");
        lblReligion = new JLabel("Religion");
        lblHouseName = new JLabel("House Name");
        lblCity = new JLabel("City");
        lblDistrict = new JLabel("District");
        lblState = new JLabel("State");
        lblPin = new JLabel("Pin");
        lblYear = new JLabel("Year");
        lblQualification = new JLabel("Qualification");

        txtName = new JTextField();
        txtAdNo = new JTextField();
        txtPhNo = new JTextField();
        //txtSex = new JTextField();                   
        cmbSex = new JComboBox();
        cmbSex.addItem("MALE");
        cmbSex.addItem("FEMALE");
        cmbSex.setSelectedIndex(0);
        txtFatherName = new JTextField();
        txtOccupation = new JTextField();
        txtMotherName = new JTextField();
        txtDOB = new JTextField();
        txtAge = new JTextField();
        txtCaste = new JTextField();
        txtReligion = new JTextField();
        txtHouseName = new JTextField();
        txtCity = new JTextField();
        txtDistrict = new JTextField();
        txtState = new JTextField();
        txtPin = new JTextField();
        txtQualification = new JTextField();
        txtYear = new JTextField();

        btnSave = new JButton("Save", new ImageIcon(ClassLoader.getSystemResource("Images/save.png")));
        btnCancel = new JButton("Cancel", new ImageIcon(ClassLoader.getSystemResource("Images/cancel.png")));
        btnClear = new JButton("Clear", new ImageIcon(ClassLoader.getSystemResource("Images/clear.png")));
        btnSave.addActionListener(this);
        btnCancel.addActionListener(this);
        btnClear.addActionListener(this);

        panel.setLayout(null);

        lblAdNo.setBounds(100, 50, 150, 25);
        txtAdNo.setBounds(200, 50, 200, 25);
        lblName.setBounds(100, 90, 150, 25);
        txtName.setBounds(200, 90, 200, 25);
        lblPhNo.setBounds(100, 130, 150, 25);
        txtPhNo.setBounds(200, 130, 200, 25);
        lblSex.setBounds(100, 170, 150, 25);
        cmbSex.setBounds(200, 170, 200, 25);
        lblFatherName.setBounds(100, 210, 150, 25);
        txtFatherName.setBounds(200, 210, 200, 25);
        lblOccupation.setBounds(100, 250, 100, 25);
        txtOccupation.setBounds(200, 250, 200, 25);
        lblMotherName.setBounds(100, 290, 100, 25);
        txtMotherName.setBounds(200, 290, 200, 25);
        lblDOB.setBounds(100, 330, 150, 25);
        txtDOB.setBounds(200, 330, 200, 25);
        lblCaste.setBounds(100, 370, 150, 25);
        txtCaste.setBounds(200, 370, 200, 25);

        lblAge.setBounds(500, 90, 150, 25);
        txtAge.setBounds(600, 90, 200, 25);
        lblReligion.setBounds(500, 130, 100, 25);
        txtReligion.setBounds(600, 130, 200, 25);
        lblHouseName.setBounds(500, 170, 100, 25);
        txtHouseName.setBounds(600, 170, 200, 25);
        lblCity.setBounds(500, 210, 150, 25);
        txtCity.setBounds(600, 210, 200, 25);
        lblDistrict.setBounds(500, 250, 100, 25);
        txtDistrict.setBounds(600, 250, 200, 25);
        lblState.setBounds(500, 290, 50, 25);
        txtState.setBounds(600, 290, 200, 25);
        lblPin.setBounds(500, 330, 150, 25);
        txtPin.setBounds(600, 330, 200, 25);
        lblYear.setBounds(500, 370, 100, 25);
        txtYear.setBounds(600, 370, 200, 25);
        lblQualification.setBounds(100, 420, 80, 25);
        txtQualification.setBounds(200, 420, 600, 25);

        btnSave.setBounds(300, 470, 100, 25);
        btnCancel.setBounds(450, 470, 100, 25);
        btnClear.setBounds(600, 470, 100, 25);

        panel.add(lblAdNo);
        panel.add(txtAdNo);
        panel.add(lblName);
        panel.add(txtName);
        panel.add(lblPhNo);
        panel.add(txtPhNo);
        panel.add(lblSex);
        panel.add(cmbSex);
        panel.add(lblFatherName);
        panel.add(txtFatherName);
        panel.add(lblOccupation);
        panel.add(txtOccupation);
        panel.add(lblMotherName);
        panel.add(txtMotherName);
        panel.add(lblDOB);
        panel.add(txtDOB);
        panel.add(lblAge);

        panel.add(txtAge);
        panel.add(lblCaste);
        panel.add(txtCaste);
        panel.add(lblReligion);
        panel.add(txtReligion);

        panel.add(lblHouseName);
        panel.add(txtHouseName);
        panel.add(lblCity);
        panel.add(txtCity);
        panel.add(lblDistrict);
        panel.add(txtDistrict);
        panel.add(lblState);
        panel.add(txtState);
        panel.add(lblPin);
        panel.add(txtPin);
        panel.add(txtYear);
        panel.add(lblYear);
        panel.add(lblQualification);
        panel.add(txtQualification);
        panel.add(btnSave);
        panel.add(btnCancel);
        panel.add(btnClear);
        add(panel, BorderLayout.CENTER);
    //getAdmissionNo();

    }//constructor closed
    public void actionPerformed(ActionEvent e) {
        if (e.getActionCommand().equalsIgnoreCase("Save")) {
            try {
                Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
                con = DriverManager.getConnection("jdbc:odbc:student");
                try {
                    String str = "insert into student(RollNo,SName,Phno,Sex,FName,Occupation," +
                            "MName,Dob,Age,Caste,Religion,Hname,City,District,State,pin,Year,Qualification)" +
                            " values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                    PreparedStatement ps = con.prepareStatement(str);
                    ps.setString(1, txtAdNo.getText());
                    ps.setString(2, txtName.getText());
                    ps.setString(3, txtPhNo.getText());
                    ps.setString(4, cmbSex.getSelectedItem().toString());
                    ps.setString(5, txtFatherName.getText());
                    ps.setString(6, txtOccupation.getText());
                    ps.setString(7, txtMotherName.getText());
                    ps.setString(8, txtDOB.getText());
                    ps.setString(9, txtAge.getText());
                    ps.setString(10, txtCaste.getText());
                    ps.setString(11, txtReligion.getText());
                    ps.setString(12, txtHouseName.getText());
                    ps.setString(13, txtCity.getText());
                    ps.setString(14, txtDistrict.getText());
                    ps.setString(15, txtState.getText());
                    ps.setString(16, txtPin.getText());
                    ps.setString(17, txtYear.getText());
                    ps.setString(18, txtQualification.getText());
                    ps.executeUpdate();
                    JOptionPane.showMessageDialog(null, "Registration details successfully updated", "Success", JOptionPane.INFORMATION_MESSAGE);
                    ClearForm();
                } catch (Exception x) {
                    JOptionPane.showMessageDialog(null, "Error on database operation,Updation failure", "Error", JOptionPane.ERROR_MESSAGE);
                }//inner try catch closed
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(null, "Error on connection to database, cannot continue updation process", "Error", JOptionPane.ERROR_MESSAGE);
            }//outer try catch closed
        }//if closed
        if (e.getActionCommand().equalsIgnoreCase("Clear")) {
            ClearForm();
        }//if closed
        if (e.getActionCommand().equalsIgnoreCase("Cancel")) {
            this.dispose();
        }//if closed
    }

    private void ClearForm() {
        txtAdNo.setText("");
        txtName.setText("");
        cmbSex.setSelectedIndex(0);
        txtFatherName.setText("");
        txtOccupation.setText("");
        txtMotherName.setText("");
        txtDOB.setText("");
        txtAge.setText("");
        txtPhNo.setText("");
        txtCaste.setText("");
        txtReligion.setText("");
        txtHouseName.setText("");
        txtCity.setText("");
        txtDistrict.setText("");
        txtState.setText("");
        txtPin.setText("");
        txtYear.setText("");
        txtQualification.setText("");
    }//clearform() closed
    /*private void getAdmissionNo() {
    try {
    Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
    con = DriverManager.getConnection("jdbc:odbc:student");
    try {
    st = con.createStatement();
    ResultSet rs = st.executeQuery("SELECT MAX(RollNo) FROM student");
    JOptionPane.showMessageDialog(null, "ttt");
    if (rs.next()) {
    int no=Integer.parseInt(rs.getString(0));                    
    }
    } catch (Exception e) {
    JOptionPane.showMessageDialog(null, "Error on retrieving admission number" + e.toString(), "Error", JOptionPane.ERROR_MESSAGE);
    }//inner try closed
    } catch (Exception ex) {
    JOptionPane.showMessageDialog(null, "Error on database connection, Closing window", "Error", JOptionPane.ERROR_MESSAGE);
    }//try catch closed
    }//getAdmissionNo() closed*/
}//class closed

