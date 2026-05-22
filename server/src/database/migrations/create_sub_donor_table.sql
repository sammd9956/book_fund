CREATE TABLE IF NOT EXISTS tbl_sub_donor (
  sub_donor INT PRIMARY KEY AUTO_INCREMENT,
  donor_id INT,
  sub_donor_name VARCHAR(255) NOT NULL,
  sub_donor_email VARCHAR(255) NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);