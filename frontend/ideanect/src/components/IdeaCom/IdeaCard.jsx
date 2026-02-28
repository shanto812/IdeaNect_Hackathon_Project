import React from 'react';
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const IdeasSection = () => {
  const ideas = [
    {
      id: 1,
      title: "EcoTrack - Carbon Footprint Tracker",
      description: "Mobile app that helps individuals and businesses track, reduce, and offset their carbon emissions through gamification.",
      category: "GreenTech",
      fundingGoal: 100000,
      fundingRaised: 75000,
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=500&h=300&fit=crop",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "HealthAI - Personal Health Assistant",
      description: "AI-powered health monitoring system that predicts potential health issues before they become serious problems.",
      category: "HealthTech",
      fundingGoal: 150000,
      fundingRaised: 120000,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      location: "Boston, MA"
    },
    {
      id: 3,
      title: "EduVerse - VR Learning Platform",
      description: "Virtual reality platform that makes education immersive and interactive for students worldwide.",
      category: "EdTech",
      fundingGoal: 200000,
      fundingRaised: 110000,
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500&h=300&fit=crop",
      location: "Austin, TX"
    },
    {
      id: 4,
      title: "FoodLoop - Zero Waste Delivery",
      description: "Sustainable food delivery service using reusable containers and electric vehicles for eco-conscious consumers.",
      category: "FoodTech",
      fundingGoal: 80000,
      fundingRaised: 65000,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 5,
      title: "FinFlow - Smart Finance Manager",
      description: "Automated financial planning tool that helps millennials achieve their financial goals through AI-driven insights.",
      category: "FinTech",
      fundingGoal: 120000,
      fundingRaised: 90000,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      location: "New York, NY"
    },
    {
      id: 6,
      title: "AgriSmart - IoT Farming Solution",
      description: "IoT-based smart farming system that optimizes crop yield while reducing water usage by 40%.",
      category: "AgriTech",
      fundingGoal: 250000,
      fundingRaised: 175000,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      location: "Des Moines, IA"
    },
    {
      id: 7,
      title: "SecureChain - Blockchain Security",
      description: "Next-generation blockchain security platform protecting digital assets with quantum-resistant encryption.",
      category: "Blockchain",
      fundingGoal: 300000,
      fundingRaised: 180000,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      location: "Miami, FL"
    },
    {
      id: 8,
      title: "MindSpace - Mental Wellness App",
      description: "Personalized mental health support app connecting users with therapists and providing daily wellness exercises.",
      category: "Wellness",
      fundingGoal: 90000,
      fundingRaised: 72000,
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&h=300&fit=crop",
      location: "Portland, OR"
    },
    {
      id: 9,
      title: "QuantumLeap - Quantum Computing SaaS",
      description: "Cloud-based quantum computing platform for researchers and enterprises to solve complex optimization problems.",
      category: "DeepTech",
      fundingGoal: 500000,
      fundingRaised: 320000,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      location: "Santa Barbara, CA"
    },
    {
      id: 10,
      title: "UrbanBloom - Vertical Farming Network",
      description: "Network of AI-powered vertical farms in urban centers providing fresh produce with 90% less water.",
      category: "AgriTech",
      fundingGoal: 350000,
      fundingRaised: 280000,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop",
      location: "Chicago, IL"
    },
    {
      id: 11,
      title: "NeuroLink - Brain-Computer Interface",
      description: "Non-invasive BCI technology enabling thought-controlled devices for accessibility and gaming applications.",
      category: "BioTech",
      fundingGoal: 750000,
      fundingRaised: 450000,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      location: "San Diego, CA"
    },
    {
      id: 12,
      title: "AutoDrive - Autonomous Delivery Robots",
      description: "Last-mile autonomous delivery robots for urban environments reducing delivery costs by 60%.",
      category: "Robotics",
      fundingGoal: 400000,
      fundingRaised: 310000,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      location: "Pittsburgh, PA"
    },
    {
      id: 13,
      title: "CleanOcean - Plastic Recycling Tech",
      description: "Advanced plastic recycling technology converting ocean plastic into high-quality raw materials.",
      category: "CleanTech",
      fundingGoal: 280000,
      fundingRaised: 210000,
      image: "https://images.unsplash.com/photo-1618477388954-7856-5af1bd119db?w=500&h=300&fit=crop",
      location: "Miami, FL"
    },
    {
      id: 14,
      title: "SkillBridge - Remote Work Platform",
      description: "AI-powered platform matching skilled professionals with remote opportunities across global companies.",
      category: "HRTech",
      fundingGoal: 180000,
      fundingRaised: 145000,
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=500&h=300&fit=crop",
      location: "Denver, CO"
    },
    {
      id: 15,
      title: "EnergyGrid - Smart Grid Optimization",
      description: "AI system optimizing energy distribution in smart grids reducing waste and improving efficiency.",
      category: "EnergyTech",
      fundingGoal: 600000,
      fundingRaised: 420000,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      location: "Houston, TX"
    },
    {
      id: 16,
      title: "VoiceCraft - AI Voice Assistant SDK",
      description: "Developer toolkit for creating custom voice assistants with industry-specific capabilities.",
      category: "AI/ML",
      fundingGoal: 220000,
      fundingRaised: 175000,
      image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 17,
      title: "MediChain - Healthcare Data Platform",
      description: "Blockchain-based secure platform for sharing medical records between healthcare providers.",
      category: "HealthTech",
      fundingGoal: 320000,
      fundingRaised: 240000,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
      location: "Nashville, TN"
    },
    {
      id: 18,
      title: "AquaPure - Water Purification System",
      description: "Portable water purification device using solar power to provide clean drinking water in remote areas.",
      category: "SocialTech",
      fundingGoal: 150000,
      fundingRaised: 110000,
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&h=300&fit=crop",
      location: "Phoenix, AZ"
    },
    {
      id: 19,
      title: "CodeCanvas - Visual Programming Tool",
      description: "Drag-and-drop programming platform making coding accessible to non-technical users.",
      category: "EdTech",
      fundingGoal: 190000,
      fundingRaised: 155000,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      location: "Raleigh, NC"
    },
    {
      id: 20,
      title: "SafeRoute - Personal Safety App",
      description: "Real-time safety monitoring app with emergency features and route optimization for safe travel.",
      category: "SocialTech",
      fundingGoal: 120000,
      fundingRaised: 95000,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      location: "Washington, DC"
    },
    {
      id: 21,
      title: "FarmToTable - Supply Chain Platform",
      description: "Blockchain platform connecting local farmers directly with restaurants and consumers.",
      category: "FoodTech",
      fundingGoal: 210000,
      fundingRaised: 165000,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      location: "Portland, OR"
    },
    {
      id: 22,
      title: "FitAI - Personalized Fitness Coach",
      description: "AI-powered fitness app creating personalized workout plans with real-time form correction.",
      category: "Wellness",
      fundingGoal: 140000,
      fundingRaised: 105000,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      location: "Los Angeles, CA"
    },
    {
      id: 23,
      title: "EcoPack - Sustainable Packaging",
      description: "Biodegradable packaging materials made from agricultural waste replacing plastic packaging.",
      category: "GreenTech",
      fundingGoal: 270000,
      fundingRaised: 190000,
      image: "https://images.unsplash.com/photo-1587332278432-231adf2c8f67?w=500&h=300&fit=crop",
      location: "Minneapolis, MN"
    },
    {
      id: 24,
      title: "TradeFlow - Global Trade Platform",
      description: "Digital platform simplifying international trade with automated documentation and logistics.",
      category: "Logistics",
      fundingGoal: 450000,
      fundingRaised: 320000,
      image: "https://images.unsplash.com/photo-1565374397052-051e81c68578?w=500&h=300&fit=crop",
      location: "Miami, FL"
    },
    {
      id: 25,
      title: "LearnLingo - AI Language Tutor",
      description: "Adaptive language learning platform using conversational AI for personalized instruction.",
      category: "EdTech",
      fundingGoal: 160000,
      fundingRaised: 125000,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=300&fit=crop",
      location: "New York, NY"
    },
    {
      id: 26,
      title: "SolarTile - Building-integrated PV",
      description: "Solar panel tiles that replace conventional roofing while generating clean energy.",
      category: "EnergyTech",
      fundingGoal: 380000,
      fundingRaised: 290000,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      location: "San Jose, CA"
    },
    {
      id: 27,
      title: "DataGuard - Privacy Compliance Tool",
      description: "Automated GDPR/CCPA compliance platform for businesses handling customer data.",
      category: "LegalTech",
      fundingGoal: 230000,
      fundingRaised: 180000,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      location: "Boston, MA"
    },
    {
      id: 28,
      title: "PetConnect - Smart Pet Monitoring",
      description: "IoT-enabled pet monitoring system with health tracking and automated feeding.",
      category: "IoT",
      fundingGoal: 130000,
      fundingRaised: 98000,
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=300&fit=crop",
      location: "Austin, TX"
    },
    {
      id: 29,
      title: "CryptoPay - Digital Payment Gateway",
      description: "Secure cryptocurrency payment processor for e-commerce businesses with instant settlement.",
      category: "FinTech",
      fundingGoal: 290000,
      fundingRaised: 220000,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      location: "San Francisco, CA"
    },
    {
      id: 30,
      title: "CleanAir - Urban Air Purification",
      description: "Network of smart air purifiers in urban areas with real-time pollution monitoring.",
      category: "CleanTech",
      fundingGoal: 340000,
      fundingRaised: 255000,
      image: "https://images.unsplash.com/photo-1569163139394-de44cb54d0a2?w=500&h=300&fit=crop",
      location: "Los Angeles, CA"
    },
    {
      id: 31,
      title: "CodeReview AI - Automated Code Analysis",
      description: "AI system that automatically reviews code for bugs, security issues, and best practices.",
      category: "DevTools",
      fundingGoal: 260000,
      fundingRaised: 195000,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 32,
      title: "UrbanMobility - Smart Transit App",
      description: "Integrated mobility platform combining public transit, ride-sharing, and micro-mobility options.",
      category: "Mobility",
      fundingGoal: 310000,
      fundingRaised: 235000,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      location: "Chicago, IL"
    },
    {
      id: 33,
      title: "BioPrint - 3D Bioprinting Service",
      description: "On-demand 3D bioprinting of tissues for medical research and drug testing applications.",
      category: "BioTech",
      fundingGoal: 850000,
      fundingRaised: 520000,
      image: "https://images.unsplash.com/photo-1581093458791-8a0a1ae1b484?w=500&h=300&fit=crop",
      location: "San Diego, CA"
    },
    {
      id: 34,
      title: "SmartHome OS - Unified Home Automation",
      description: "Operating system that unifies all smart home devices with voice and AI control.",
      category: "IoT",
      fundingGoal: 270000,
      fundingRaised: 205000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25856e883?w=500&h=300&fit=crop",
      location: "San Jose, CA"
    },
    {
      id: 35,
      title: "EduAnalytics - Learning Analytics Platform",
      description: "Data analytics platform helping educational institutions improve student outcomes.",
      category: "EdTech",
      fundingGoal: 180000,
      fundingRaised: 135000,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      location: "Boston, MA"
    },
    {
      id: 36,
      title: "AgriDrone - Precision Agriculture",
      description: "Drone-based crop monitoring and analysis service for precision farming applications.",
      category: "AgriTech",
      fundingGoal: 220000,
      fundingRaised: 165000,
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop",
      location: "Fresno, CA"
    },
    {
      id: 37,
      title: "NeuroFit - Cognitive Training App",
      description: "Gamified cognitive training platform for improving memory, focus, and mental agility.",
      category: "Wellness",
      fundingGoal: 150000,
      fundingRaised: 115000,
      image: "https://images.unsplash.com/photo-1590488351141-aa771c6f43a0?w=500&h=300&fit=crop",
      location: "Denver, CO"
    },
    {
      id: 38,
      title: "CleanWater AI - Water Quality Monitoring",
      description: "AI-powered system for real-time water quality monitoring and contamination detection.",
      category: "CleanTech",
      fundingGoal: 290000,
      fundingRaised: 215000,
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500&h=300&fit=crop",
      location: "Atlanta, GA"
    },
    {
      id: 39,
      title: "AutoDoc - Medical Documentation AI",
      description: "AI assistant that automates medical documentation saving doctors 10+ hours per week.",
      category: "HealthTech",
      fundingGoal: 320000,
      fundingRaised: 245000,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop",
      location: "Philadelphia, PA"
    },
    {
      id: 40,
      title: "GreenBuild - Sustainable Construction",
      description: "Modular construction system using recycled materials for rapid, eco-friendly building.",
      category: "ConstructionTech",
      fundingGoal: 480000,
      fundingRaised: 360000,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
      location: "Dallas, TX"
    },
    {
      id: 41,
      title: "TradeAI - Algorithmic Trading Platform",
      description: "AI-driven algorithmic trading platform for retail investors with institutional-grade tools.",
      category: "FinTech",
      fundingGoal: 350000,
      fundingRaised: 265000,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      location: "New York, NY"
    },
    {
      id: 42,
      title: "VR Therapy - Virtual Reality Rehabilitation",
      description: "VR-based physical therapy system making rehabilitation engaging and measurable.",
      category: "HealthTech",
      fundingGoal: 280000,
      fundingRaised: 210000,
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500&h=300&fit=crop",
      location: "Orlando, FL"
    },
    {
      id: 43,
      title: "EcoRide - Electric Bike Sharing",
      description: "Smart electric bike sharing network with solar-powered charging stations.",
      category: "Mobility",
      fundingGoal: 310000,
      fundingRaised: 235000,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      location: "Portland, OR"
    },
    {
      id: 44,
      title: "FoodPrint - Nutritional Analysis App",
      description: "AI-powered app that analyzes food photos to provide detailed nutritional information.",
      category: "HealthTech",
      fundingGoal: 190000,
      fundingRaised: 145000,
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&h=300&fit=crop",
      location: "Boulder, CO"
    },
    {
      id: 45,
      title: "BlockVote - Secure Voting Platform",
      description: "Blockchain-based secure voting platform for organizations and governments.",
      category: "GovTech",
      fundingGoal: 420000,
      fundingRaised: 315000,
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&h=300&fit=crop",
      location: "Washington, DC"
    },
    {
      id: 46,
      title: "MediScan - AI Medical Imaging",
      description: "AI system that analyzes medical images to detect diseases with 95% accuracy.",
      category: "HealthTech",
      fundingGoal: 550000,
      fundingRaised: 410000,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop",
      location: "Rochester, MN"
    },
    {
      id: 47,
      title: "SmartFarm - Automated Hydroponics",
      description: "Fully automated hydroponic farming system for urban agriculture with AI optimization.",
      category: "AgriTech",
      fundingGoal: 330000,
      fundingRaised: 250000,
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&h=300&fit=crop",
      location: "Detroit, MI"
    },
    {
      id: 48,
      title: "CodeCollab - Real-time Coding Platform",
      description: "Browser-based IDE with real-time collaboration features for remote development teams.",
      category: "DevTools",
      fundingGoal: 240000,
      fundingRaised: 185000,
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&fit=crop",
      location: "San Francisco, CA"
    },
    {
      id: 49,
      title: "EnergyStorage - Grid-scale Batteries",
      description: "Advanced battery technology for grid-scale energy storage using novel materials.",
      category: "EnergyTech",
      fundingGoal: 1200000,
      fundingRaised: 850000,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      location: "Reno, NV"
    },
    {
      id: 50,
      title: "LegalAI - Contract Analysis Tool",
      description: "AI platform that analyzes legal contracts and identifies risks and opportunities.",
      category: "LegalTech",
      fundingGoal: 290000,
      fundingRaised: 220000,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop",
      location: "New York, NY"
    },
    {
      id: 51,
      title: "UrbanGreen - Rooftop Farming Service",
      description: "Service that converts urban rooftops into productive farms with automated systems.",
      category: "AgriTech",
      fundingGoal: 270000,
      fundingRaised: 200000,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&h=300&fit=crop",
      location: "Chicago, IL"
    },
    {
      id: 52,
      title: "MindRead - Emotion Recognition AI",
      description: "AI system that analyzes facial expressions and voice tones to detect emotions.",
      category: "AI/ML",
      fundingGoal: 380000,
      fundingRaised: 285000,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      location: "Palo Alto, CA"
    },
    {
      id: 53,
      title: "CleanCommute - Corporate Carpooling",
      description: "Corporate carpooling platform reducing commuting costs and carbon emissions.",
      category: "Mobility",
      fundingGoal: 210000,
      fundingRaised: 160000,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      location: "Austin, TX"
    },
    {
      id: 54,
      title: "EduStream - Live Learning Platform",
      description: "Interactive live streaming platform for educators with built-in engagement tools.",
      category: "EdTech",
      fundingGoal: 170000,
      fundingRaised: 130000,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop",
      location: "Los Angeles, CA"
    },
    {
      id: 55,
      title: "HealthTrack - Wearable Health Monitor",
      description: "Advanced wearable device tracking multiple health metrics with medical-grade accuracy.",
      category: "HealthTech",
      fundingGoal: 410000,
      fundingRaised: 310000,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      location: "San Diego, CA"
    },
    {
      id: 56,
      title: "AutoScale - Cloud Cost Optimization",
      description: "AI-powered platform that automatically optimizes cloud infrastructure costs.",
      category: "CloudTech",
      fundingGoal: 260000,
      fundingRaised: 195000,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 57,
      title: "GreenMining - Sustainable Crypto Mining",
      description: "Cryptocurrency mining operation powered entirely by renewable energy sources.",
      category: "Blockchain",
      fundingGoal: 520000,
      fundingRaised: 390000,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      location: "Cheyenne, WY"
    },
    {
      id: 58,
      title: "SmartRetail - AI Store Optimization",
      description: "AI system optimizing retail store layouts and inventory based on customer behavior.",
      category: "RetailTech",
      fundingGoal: 300000,
      fundingRaised: 225000,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      location: "New York, NY"
    },
    {
      id: 59,
      title: "AquaFarm - Automated Aquaculture",
      description: "AI-controlled aquaculture system for sustainable fish farming with minimal environmental impact.",
      category: "AgriTech",
      fundingGoal: 370000,
      fundingRaised: 280000,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 60,
      title: "CodeMentor - AI Programming Tutor",
      description: "AI-powered coding tutor that provides personalized guidance and code reviews.",
      category: "EdTech",
      fundingGoal: 200000,
      fundingRaised: 150000,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      location: "San Francisco, CA"
    },
    {
      id: 61,
      title: "EnergyAI - Predictive Maintenance",
      description: "AI system predicting equipment failures in energy infrastructure before they occur.",
      category: "EnergyTech",
      fundingGoal: 440000,
      fundingRaised: 330000,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      location: "Houston, TX"
    },
    {
      id: 62,
      title: "MediMatch - Clinical Trial Platform",
      description: "Platform matching patients with relevant clinical trials using AI and medical data.",
      category: "HealthTech",
      fundingGoal: 360000,
      fundingRaised: 270000,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      location: "Boston, MA"
    },
    {
      id: 63,
      title: "UrbanLogistics - Delivery Optimization",
      description: "AI platform optimizing last-mile delivery routes reducing costs and delivery times.",
      category: "Logistics",
      fundingGoal: 390000,
      fundingRaised: 295000,
      image: "https://images.unsplash.com/photo-1565374397052-051e81c68578?w=500&h=300&fit=crop",
      location: "Memphis, TN"
    },
    {
      id: 64,
      title: "CleanText - AI Content Moderation",
      description: "AI system automatically moderating online content for hate speech and misinformation.",
      category: "AI/ML",
      fundingGoal: 280000,
      fundingRaised: 210000,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      location: "Mountain View, CA"
    },
    {
      id: 65,
      title: "SmartWaste - Recycling Optimization",
      description: "AI-powered waste sorting system increasing recycling efficiency by 50%.",
      category: "CleanTech",
      fundingGoal: 320000,
      fundingRaised: 240000,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=300&fit=crop",
      location: "Portland, OR"
    },
    {
      id: 66,
      title: "FinSecure - Fraud Detection AI",
      description: "Real-time AI system detecting financial fraud with 99.9% accuracy.",
      category: "FinTech",
      fundingGoal: 470000,
      fundingRaised: 355000,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      location: "Charlotte, NC"
    },
    {
      id: 67,
      title: "AgriWeather - Precision Forecasting",
      description: "Hyper-local weather forecasting system optimized for agricultural applications.",
      category: "AgriTech",
      fundingGoal: 250000,
      fundingRaised: 190000,
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500&h=300&fit=crop",
      location: "Kansas City, MO"
    },
    {
      id: 68,
      title: "HealthConnect - Telemedicine Platform",
      description: "Comprehensive telemedicine platform with integrated EHR and payment systems.",
      category: "HealthTech",
      fundingGoal: 430000,
      fundingRaised: 325000,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
      location: "Nashville, TN"
    }
  ];

  const calculateFundingPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Some Featured of Startup Ideas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover innovative startups seeking investment and be part of the next big success story
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ideas.map((idea) => {
            const fundingPercentage = calculateFundingPercentage(idea.fundingRaised, idea.fundingGoal);
            
            return (
              <div key={idea.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={idea.image} 
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white text-xs font-semibold rounded-full">
                      {idea.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
                    {idea.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {idea.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <HiOutlineLocationMarker className="w-4 h-4 mr-1" />
                    <span>{idea.location}</span>
                  </div>

                  {/* Funding Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Funding Progress</span>
                      <span className="font-semibold text-gray-900">{fundingPercentage.toFixed(0)}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${fundingPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-2">
                      <span className="text-gray-500">
                        Raised: <span className="font-semibold text-gray-700">{formatCurrency(idea.fundingRaised)}</span>
                      </span>
                      <span className="text-gray-500">
                        Goal: {formatCurrency(idea.fundingGoal)}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <Link to='/login'> 
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium flex items-center justify-center group">
                      Invest Now
                      <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IdeasSection;