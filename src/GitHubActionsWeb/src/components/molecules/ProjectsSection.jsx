import React from "react"
import projects from "../../assets/images/projects.png"

const ProjectsSection = () => {
  return (
    <section id="projects" className="content-section">
      <div className="content-left">
        <h2>Projects</h2>
        <img src={projects} alt="Projects" />
      </div>
      <div>
        <p>
          <strong>Woot.com <em>(an Amazon subsidiary)</em></strong><br/>Engineered an AWS Cloud Native application to optimize warehouse operations, integrating automation and AI-driven analytics to enhance logistics efficiency. The solution included mobile app development for Android
          devices used on the warehouse floor.
          <em>(AWS, C#, Android, Java, Python, ReactJS, CloudFormation)</em>
        </p>
        <p>
          <strong>American Airlines</strong><br/>Designed and deployed systems to support travelers journey inside the airport. Managing Ticketing, Boarding, Baggage, and customer service.
          <em>(Azure, C#, JAVA, Kotlin, SQL Server, Azure DevOps, Terraform)</em>
        </p>
        <p>
          <strong>Sundt</strong><br/>Designed and deployed an Azure Cloud Native platform that dynamically generates and delivers custom Power BI reports to external clients, enabling real-time data insights and business intelligence.
          <em>(Azure, C#, SQL Server, Azure DevOps, Pulumi)</em>
        </p>
        <p>
          <strong>Microchip</strong><br/>Created an AI-powered document processing system to analyze and categorize purchase agreements, ensuring compliance with Federal Contracting Requirements while improving efficiency in procurement workflows.
          <em>(Azure, C#, SQL Server, Azure DevOps, Terraform)</em>
        </p>
        <p>
          <strong>CSSA - Cal-RIPA</strong><br/>Designed and implemented an Azure Cloud Native application to track law enforcement interactions during traffic stops, ensuring compliance with reporting standards and transparency requirements.
          <em>(Azure, C#, Cosmos DB, Azure DevOps, Terraform)</em>
        </p>
        <p>
          <strong>CSSA - CCW</strong><br/>Developed a secure, cloud-based system for managing public applications and approvals for Concealed Carry Weapon (CCW) permits, streamlining the process for both applicants and law enforcement agencies.
          <em>(Azure, C#, Cosmos DB, Azure DevOps, Terraform)</em>
        </p>
        <p>
          <strong>Fusebox.com Energy Saving</strong><br/>Developed a framework for downloading and analyzing utility data to optimize energy savings.
          <em>(MongoDB, Node.js, C#, .NET Framework, Bootstrap)</em>
        </p>
        <p>
          <strong>Energy Imbalance Market (EIM)</strong><br/>Led the integration of 150+ system interfaces for real-time energy trading.
          <em>(Java, C#, BeanShell, WebLogic, SQL Server, Oracle)</em>
        </p>
        <p>
          <strong>Renewable Program Management (RPM)</strong><br/>Built an online system for managing renewable energy applications.
          <em>(C#, ASP.NET MVC, Entity Framework, SQL Server, Bootstrap)</em>
        </p>
        <p>
          <strong>Demand Response (DR)</strong><br/>Created a system that saved $85M by processing millions of meter records in minutes.
          <em>(TIBCO, C#, .NET Entity Framework, SQL Server, DB2/IBM CIS)</em>
        </p>
        <p>
          <strong>Distribution Operations Management System (DOMS)</strong><br/>Developed high-performance interfaces for managing Arizona’s electricity grid.
          <em>(SQL Server, JMS, TIBCO)</em>
        </p>
        <p>
          <strong>SENTRI</strong><br/>Designed a real-time nuclear power plant monitoring system for Palo Verde Nuclear Generating Station.
          <em>(Oracle, .NET Framework, C#, IIS, XSLT)</em>
        </p>
        <p>
          <strong>TranzAct</strong><br/>Engineered a high-availability, real-time messaging system processing 100K+ messages per minute.
          <em>(C#, SQL Server, MSMQ)</em>
        </p>
        <p>
          <strong>TranZ</strong><br/>Built trade management systems for power, gas, and commodities trading.
          <em>(C#, Visual Basic, SQL Server, Sybase, COM, ODBC)</em>
        </p>
      </div>
    </section>
  )
}

export default ProjectsSection
