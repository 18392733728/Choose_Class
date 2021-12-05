package com.happ.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.Filter;
import javax.sql.DataSource;
import java.util.HashMap;

@Configuration
public class DruidConfig {

    //绑定yaml配置文件
    @ConfigurationProperties("spring.datasource")
    @Bean
    public DataSource dirudDataSource(){
        return new DruidDataSource();
    }

    @Bean
    //后台监控
    public ServletRegistrationBean servletRegistrationBean(){
        ServletRegistrationBean<StatViewServlet> bean = new ServletRegistrationBean<>(new StatViewServlet(), "/druid/*");
        HashMap<String, String> map = new HashMap<>();
        map.put("loginUsername","root");
        map.put("loginPassword","1452");
        //运行访问(允许所有人)
        map.put("allow", "");
        bean.setInitParameters(map);
        return bean;
    }

    @Bean
    //filter
    public FilterRegistrationBean filterRegistrationBean(){
        FilterRegistrationBean<WebStatFilter> bean = new FilterRegistrationBean<>(new WebStatFilter());

        Filter filter = bean.getFilter();
        HashMap<String, String> map = new HashMap<>();

        map.put("exclusions","*.js,*.css,/druid/*");
        bean.setInitParameters(map);
        return bean;
    }


}
