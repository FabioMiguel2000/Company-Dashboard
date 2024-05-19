from ..extensions import db

class Customer(db.Model):
    __tablename__ = 'customers'
    customerNumber = db.Column(db.Integer, primary_key=True)
    customerName = db.Column(db.String(50), nullable=False)
    contactLastName = db.Column(db.String(50), nullable=False)
    contactFirstName = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(50), nullable=False)
    addressLine1 = db.Column(db.String(50), nullable=False)
    addressLine2 = db.Column(db.String(50))
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50))
    postalCode = db.Column(db.String(15))
    country = db.Column(db.String(50), nullable=False)
    salesRepEmployeeNumber = db.Column(db.Integer, db.ForeignKey('employees.employeeNumber'))
    creditLimit = db.Column(db.Numeric(10, 2))

    def to_dict(self):
        return {
            "customerNumber": self.customerNumber,
            "customerName": self.customerName,
            "contactLastName": self.contactLastName,
            "contactFirstName": self.contactFirstName,
            "phone": self.phone,
            "addressLine1": self.addressLine1,
            "addressLine2": self.addressLine2,
            "city": self.city,
            "state": self.state,
            "postalCode": self.postalCode,
            "country": self.country,
            "salesRepEmployeeNumber": self.salesRepEmployeeNumber,
            "creditLimit": self.creditLimit
        }
