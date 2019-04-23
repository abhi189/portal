package portal.budderfly.com.cucumber.stepdefs;

import portal.budderfly.com.PortalApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = PortalApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
