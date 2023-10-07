# Key Architectural Decisions

## Table of Contents

- [Directions](#directions)
- [1. Introduction](#1-introduction)
  - [1.1. Purpose](#11-purpose)
- [2. System Overview](#2-system-overview)
- [3. Technical Choices](#3-technical-choices)
  - [3.1. Frontend Framework](#31-frontend-framework)
  - [3.2. Backend Framework](#32-backend-framework)
  - [3.3. Database System](#33-database-system)
- [4. Other Considerations](#4-other-considerations)
  - [4.1. Team Skills and Learning](#41-team-skills-and-learning)
  - [4.2. Community and Support](#42-community-and-support)
  - [4.3. Future Adaptability](#43-future-adaptability)
- [5. Decision Log](#5-decision-log)

## Directions:

This assignment is designed to guide you in understanding the foundational aspects of your project. Remember, in software engineering, understanding the "why" behind decisions is often as important as the decisions themselves. As you navigate these early stages of your coding journey, focus on grasping the core reasons behind each choice, and use this document to record and reflect on those reasons.

---

## 1. Introduction

### 1.1. Purpose

-Outline what technologies we will learn and implement to create the Pawsome Prices website.

---

## 2. System Overview

-Provide a simple diagram or description of the high-level system.

---

## 3. Technical Choices

### 3.1. Frontend Framework

**Choice:** React 

**Why:** React is well-documented and widely used, making those skills valuable in the workforce. React is popular because it encapsulates html into functions that are easier to read and reuse.

**Considerations:** We will use Vite to build our React frontend because it streamlines the process. React is a faster frontend than some of its competitors but requires a lot external libraries. This creates flexibility but less structure. 

### 3.2. Backend Framework

**Choice:** Django 

**Why:** The team is most familiar with Python so the learning curve will be easier. It is also a popular skill to include on a resume and well-docmented. 

**Considerations:**

### 3.3. Database System

**Choice:** mySQL 

**Why:** mySQL is a common industry standard that is free to use. 

**Considerations:**

---

## 4. Other Considerations

### 4.1. Team Skills and Learning

- We all knew that we would need to learn most of the new technologies due to a lack of experience with real product development, but we had certain skills like Python beforehand, which influenced our decisions to use a backend like Django.
- We also looked up what is popular in the industry and what would be valuable to include on a resume. It did not make sense to use less prominant technologies that would not apply to most jobs.

### 4.2. Community and Support

- Our research started with finding what technologies were available in the first place, and the ones with the most abundant amount of tutorials like React, Angular, Vue, Node, and Django were the ones we considered.

### 4.3. Future Adaptability

- Based on our current understanding, abstraction between the frontend and backend allows for changes in technologies in one area that does not affect the other.
- React is not strict with a lot of the libraries that can be used, so those technologies can be changed if new, easier resources are found.

---

## 5. Decision Log

Here, you'll log key decisions made and the rationale behind them. Here's an example:

| Date       | Decision                                 | Reasoning                                                                                                           |
|------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 2023-10-07 | Chose React as our frontend framework.   | Our frontend team found React easy to use and was able to get a simple website instance up quickly because of how flexible and well-documented it is. |
| 2023-10-07 | Chose Django as our backend framework.   | Our backend team was most familar with Python, which made learning Django a logical choice for a backend framework. |
| 2023-10-07 | Chose mySQL as our database.   | While doing research, mySQL was the most popular option with a free community edition that is well-supported, which is why our database team wanted to learn it the most. |

Note: As you progress, keep adding to this log. It will not only help you track your decisions but also offer insights into your evolving
