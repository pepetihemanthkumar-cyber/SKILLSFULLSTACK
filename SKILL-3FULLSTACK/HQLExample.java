
import org.hibernate.*;
import org.hibernate.cfg.Configuration;
import java.util.*;

public class HQLExample {

    public static void main(String[] args) {

        SessionFactory factory = new Configuration().configure().buildSessionFactory();
        Session session = factory.openSession();

        // Sorting by price ascending
        Query q1 = session.createQuery("FROM Product ORDER BY price ASC");
        List<Product> list1 = q1.list();

        // Sorting by price descending
        Query q2 = session.createQuery("FROM Product ORDER BY price DESC");
        List<Product> list2 = q2.list();

        // Sort by quantity highest first
        Query q3 = session.createQuery("FROM Product ORDER BY quantity DESC");

        // Pagination
        Query q4 = session.createQuery("FROM Product");
        q4.setFirstResult(0);
        q4.setMaxResults(3);

        // Aggregate examples
        Query q5 = session.createQuery("SELECT COUNT(*) FROM Product");
        Query q6 = session.createQuery("SELECT MIN(price), MAX(price) FROM Product");

        // Filter by price range
        Query q7 = session.createQuery("FROM Product WHERE price BETWEEN 100 AND 10000");

        // LIKE queries
        Query q8 = session.createQuery("FROM Product WHERE name LIKE 'L%'");
        Query q9 = session.createQuery("FROM Product WHERE name LIKE '%r'");
        Query q10 = session.createQuery("FROM Product WHERE name LIKE '%top%'");

        session.close();
        factory.close();
    }
}
