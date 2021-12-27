package com.edu.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DAO {
	public Connection conn;
	public PreparedStatement psmt;
	public ResultSet rs;

	public void connect() {
		// 1. JDBC 드라이버 로딩하기
		// 자바에서 제공하는게 아니기 떄문에 JDBC 드라이버를 로딩시켜서 -> 메모리상에 띄워야함
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 2. DBMS 서버와 접속하기
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String id = "hr";
		String password = "hr";

		try {
			conn = DriverManager.getConnection(url, id, password);
			System.out.println("연결 성공!!");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public void disconnect() {
		if(rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		if(psmt != null) {
			try {
				psmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		if(conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
