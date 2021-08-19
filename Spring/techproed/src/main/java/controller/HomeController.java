
package controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class HomeController {
	
	@RequestMapping ("/")
	public String Home () {
		return "index";
		
	}

}
