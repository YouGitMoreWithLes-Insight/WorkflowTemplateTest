import React from "react"
import skills from "../../assets/images/skills.png"

const SkillsSection = () => {
  return (
    <section id="skills" className="content-section">
      <div className="content-left">
        <h2>My Skills</h2>
        <img src={skills} alt="Engineering Skills" />
      </div>
      <div>
        <ul className="skills-list">
          <li className="no-bullet">
            <strong>Software Architecture & Development</strong>
            <ul>
              <li>Enterprise solution design and development</li>
              <li>Microservices architecture & cloud-native applications</li>
              <li>API design (REST, GraphQL, gRPC)</li>
              <li>Domain-Driven Design (DDD), Event-Driven Architecture (EDA)</li>
              <li>Serverless computing (AWS Lambda, Azure Functions)</li>
            </ul>
          </li>
          <li className="no-bullet">
            <strong>Programming Languages & Frameworks</strong>
            <ul>
              <li>C#, .NET (Core & Framework), ASP.NET (MVC, Web API, Blazor)</li>
              <li>Java (Spring Boot, Jakarta EE), Kotlin (Android)</li>
              <li>JavaScript, TypeScript, Node.js, React, Angular, Vue.js</li>
              <li>Python (Django, FastAPI, Flask)</li>
              <li>Swift/Xcode (iOS), Dart/Flutter, React Native)</li>
              <li>C++ (Modern C++ 11/14/17), Rust, Go)</li>
            </ul>
          </li>
          <li className="no-bullet">
            <strong>Databases & Data Management</strong>
            <ul>
              <li>SQL Server, PostgreSQL, MySQL, Oracle)</li>
              <li>NoSQL databases (MongoDB, DynamoDB, CosmosDB, Firebase)</li>
              <li>Data warehousing (Snowflake, BigQuery, Redshift)</li>
              <li>Data modeling & ETL processes)</li>
              <li>Graph databases (Neo4j, Amazon Neptune)</li>
            </ul>
          </li>
          <li className="no-bullet">
            <strong>Cloud & DevOps</strong>
            <ul>
              <li>Microsoft Azure (App Services, AKS, CosmosDB, Functions)</li>
              <li>AWS (EC2, Lambda, S3, RDS, DynamoDB, API Gateway)</li>
              <li>Google Cloud (GKE, Cloud Run, Firestore, Pub/Sub)</li>
              <li>Kubernetes, Docker, Terraform, Pulumi)</li>
              <li>CI/CD pipelines (GitHub Actions, Azure DevOps, GitLab CI)</li>
            </ul>
          </li>
          <li className="no-bullet">
            <strong>Testing & Quality Assurance</strong>
            <ul>
              <li>Test-Driven Development (TDD), Behavior-Driven Development (BDD)</li>
              <li>Unit testing (xUnit, NUnit, JUnit, Jest, Mocha)</li>
              <li>Performance testing (JMeter, k6)</li>
              <li>Security testing (OWASP ZAP, Snyk, SonarQube)</li>
            </ul>
          </li>
          <li className="no-bullet">
            <strong>Operating Systems & Distributed Systems</strong>
            <ul>
              <li>Windows, Linux, macOS)</li>
              <li>Distributed computing, event streaming (Kafka, RabbitMQ, Azure Event Hubs)</li>
              <li>Real-time systems, WebSockets, SignalR)</li>
            </ul>
          </li>
          <li className="no-bullet">
            <strong>Soft Skills & Leadership</strong>
            <ul>
              <li>Team leadership & mentoring)</li>
              <li>Agile/Scrum methodologies)</li>
              <li>Strong customer relations & stakeholder communication)</li>
              <li>Cross-functional collaboration)</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SkillsSection
