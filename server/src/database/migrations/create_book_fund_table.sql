CREATE TABLE IF NOT EXISTS tbl_book_funds (
  book_fund_id INT PRIMARY KEY AUTO_INCREMENT,
  fund_type VARCHAR(100) NOT NULL,
  school_name VARCHAR(255) NOT NULL,
  fund_name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  donor_name VARCHAR(150) NOT NULL,
  donor_email VARCHAR(150) NOT NULL UNIQUE,
  donor_password VARCHAR(255) NOT NULL,
  goal_amount DECIMAL(12,2) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
