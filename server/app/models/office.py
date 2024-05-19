from ..extensions import db

class Office(db.Model):
    __tablename__ = 'offices'
    officeCode = db.Column(db.String(10), primary_key=True)
    city = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(50), nullable=False)
    addressLine1 = db.Column(db.String(50), nullable=False)
    addressLine2 = db.Column(db.String(50))
    state = db.Column(db.String(50))
    country = db.Column(db.String(50), nullable=False)
    postalCode = db.Column(db.String(15), nullable=False)
    territory = db.Column(db.String(10), nullable=False)

    def to_dict(self):
        return {
            "officeCode": self.officeCode,
            "city": self.city,
            "phone": self.phone,
            "addressLine1": self.addressLine1,
            "addressLine2": self.addressLine2,
            "state": self.state,
            "country": self.country,
            "postalCode": self.postalCode,
            "territory": self.territory
        }
