
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Profile

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'major', 'bio')
        extra_kwargs = {'password': {'write_only': True}}

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('avatar', 'year_of_study', 'courses')

class UserProfileSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)
    
    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'major', 'bio', 'profile')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        profile_data = validated_data.pop('profile', None)
        password = validated_data.pop('password', None)
        
        user = User.objects.create(**validated_data)
        if password:
            user.set_password(password)
            user.save()
            
        if profile_data:
            Profile.objects.create(user=user, **profile_data)
        
        return user
    
    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile', None)
        
        # Update user fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update profile fields
        if profile_data and hasattr(instance, 'profile'):
            for attr, value in profile_data.items():
                setattr(instance.profile, attr, value)
            instance.profile.save()
        elif profile_data:
            Profile.objects.create(user=instance, **profile_data)
            
        return instance

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'password')
    
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            name=validated_data['name']
        )
        return user
