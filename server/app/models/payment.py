from ..extensions import db

class Payment(db.Model):
    __tablename__ = 'payments'
    customerNumber = db.Column(db.Integer, db.ForeignKey('customers.customerNumber'), primary_key=True)
    checkNumber = db.Column(db.String(50), primary_key=True)
    paymentDate = db.Column(db.Date, nullable=False)
    amount = db.Column(db.Numeric(10, 2), nullable=False)

    def to_dict(self):
        return {
            "customerNumber": self.customerNumber,
            "checkNumber": self.checkNumber,
            "paymentDate": self.paymentDate,
            "amount": self.amount
        }
