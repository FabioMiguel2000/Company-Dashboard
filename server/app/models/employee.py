from ..extensions import db

class Employee(db.Model):
    __tablename__ = 'employees'
    employeeNumber = db.Column(db.Integer, primary_key=True)
    lastName = db.Column(db.String(50), nullable=False)
    firstName = db.Column(db.String(50), nullable=False)
    extension = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    officeCode = db.Column(db.String(10), db.ForeignKey('offices.officeCode'), nullable=False)
    reportsTo = db.Column(db.Integer, db.ForeignKey('employees.employeeNumber'))
    jobTitle = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "employeeNumber": self.employeeNumber,
            "lastName": self.lastName,
            "firstName": self.firstName,
            "extension": self.extension,
            "email": self.email,
            "officeCode": self.officeCode,
            "reportsTo": self.reportsTo,
            "jobTitle": self.jobTitle
        }
