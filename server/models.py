from pymongo import MongoClient
import os
from dotenv import load_dotenv
from bson import ObjectId

load_dotenv()

client = MongoClient('mongodb+srv://krishnakanta2008:krishna2008@cluster0.7rimb.mongodb.net')
db = client['PredictHub']  

class User:
    @staticmethod
    def create_user(data):
        user_data = {
            "firstname": data['firstname'],
            "lastname": data['lastname'],
            "username": data['username'],
            "email": data['email'],
            "password": data['password'],
            "watchlist": [],
            "profileImage": None,
            "profileBanner": None,
            "bio": None,
            "location": None
        }
        db.users.insert_one(user_data)
        return user_data
    
    @staticmethod
    def update_profile(username, data):
        update_fields = {}
        # Only update fields that are provided
        if 'profileImage' in data:
            update_fields['profileImage'] = data['profileImage']
        if 'profileBanner' in data:
            update_fields['profileBanner'] = data['profileBanner']
        if 'bio' in data:
            update_fields['bio'] = data['bio']
        if 'location' in data:
            update_fields['location'] = data['location']
        
        if update_fields:
            result = db.users.update_one(
                {"username": username},
                {"$set": update_fields}
            )
            return {"success": True if result.modified_count > 0 else False}
        return {"success": False, "message": "No fields to update"}

    @staticmethod
    def validate_user(username, password):
        user = db.users.find_one({"username": username, "password": password})  
        return user
    
    @staticmethod
    def find_by_username(username):
        return db.users.find_one({"username": username})

    @staticmethod
    def add_to_watchlist(username, ticker):
        user = db.users.find_one({"username": username})
        if not user:
            return {"success": False, "message": "User not found"}
        
        if ticker in user.get("watchlist", []):
            return {"success": False, "message": "Ticker already in watchlist"}
        
        db.users.update_one(
            {"username": username},
            {"$addToSet": {"watchlist": ticker}}
        )
        return {"success": True, "message": "Ticker added to watchlist"}

    @staticmethod
    def remove_from_watchlist(username, ticker):
        user = db.users.find_one({"username": username})
        if not user:
            return {"success": False, "message": "User not found"}
        
        if ticker not in user.get("watchlist", []):
            return {"success": False, "message": "Ticker not in watchlist"}
        
        db.users.update_one(
            {"username": username},
            {"$pull": {"watchlist": ticker}}
        )
        return {"success": True, "message": "Ticker removed from watchlist"}

    @staticmethod
    def get_watchlist(username):
        user = db.users.find_one({"username": username}, {"watchlist": 1, "_id": 0})
        if not user:
            return {"success": False, "message": "User not found"}
        return {"success": True, "watchlist": user.get("watchlist", [])}
    
class Contact:
    @staticmethod
    def save_message(data):
        contact_data = {
            "name": data['name'],
            "email": data['email'],
            "subject" : data['subject'],
            "message": data['message']
        }
        result = db.contacts.insert_one(contact_data)
        contact_data["_id"] = str(result.inserted_id)
        return contact_data
    
class Feedback:
    @staticmethod
    def save_feedback(data):
        contact_data = {
            "username": data['username'],
            "rating": data['rating'],
            "message": data['message']
        }
        result = db.contacts.insert_one(contact_data)
        contact_data["_id"] = str(result.inserted_id)
        return contact_data

