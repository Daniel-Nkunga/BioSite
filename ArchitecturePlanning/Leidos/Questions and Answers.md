
### Where is X relative to Y?
1. Where is X relative to Y?
2. How far is X from Y?
3. What is the distance from X to Y?
4. How to get from X to Y?
5. How does X compare to Y?
6. What is the relative position of X to Y?
7. What is the distance and direction between X and Y?
8. How does X compare spatially to Y?
9. Define the relative distance of X to Y?
10. What is the distance and direction of X and Y?
11. Describe where X is in comparison to Y?
12. What is the distance from X to Y in cardinal directions and meters?
13. How does Y's position relate to X's position?
14. Describe where Y is when starting from X?
15. Given the positions of X and Y, where is Y when starting at X?
16. Where is Y when starting at X?
17. How far off is Y from X? 
***All descriptions are meant to describe position starting from X and going to Y

### How many entities in X radius?
1. How many entities are in Y meters of X?
2. How many entities can be found in Y meters of X?
3. How many entities are close to X (within Y meters)?
4. Given a radius of Y meters, how many entities can be found near X?
5. Are there any entities within Y meters of X?
6. How many entities are in a range of Y meters of X?
7. Is there anything in Y meters of X?
8. Given there is a sphere around X with a radius of Y, how many entities are in the at sphere?
9. Are there any entities in Y meters of X?
10. Following X, how many entities are in Y radius?
11. Name all entities within Y meters of X?
12. How many entities are in Y meters of X?

### Answers
#### Position
Positional answers should be given in a cardinal or ordinal direction and a distance away. Anything greater than 15 degrees from the poles will be given as an ordinal direction. Distance will be given in meters.

1. **Context**: At timestep 845, bB0 is a bomber on the blue team. The blue bomber bB0 is located at the coordinates (x = -3677502, y = -3959553, z = 3463011). bB0 has 29577.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 59155.0 seconds. bB0 is currently holding 15 long range cruise missiles. At timestep 845, bB1 is a bomber on the blue team. The blue bomber bB1 is located at the coordinates (x = -3221538, y = -3233178, z = 4505725). bB1 has 29577.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 59155.0 seconds. bB1 is currently holding 15 long range cruise missiles.
![[Pasted image 20240716131938.png|400]]

<span style = "font-size: .75em">(*Visual of the planes scaled down 1:1000000)</span>

**Question**: Where is bB1 relative to bB0?

**Answer**: bB1 is 857,627 meters northeast of bB0.

2. **Context**: At timestep 4445, bB0 is a bomber on the blue team. The blue bomber bB0 is located at the coordinates (x = -3216943, y = -4125278, z = 3690716). bB0 has 27777.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 55555.0 seconds. bB0 is currently holding 9 long range cruise missiles. At timestep 4445, bB1 is a bomber on the blue team. The blue bomber bB1 is located at the coordinates (x = -3310878, y = -3405791, z = 4299388). bB1 has 27777.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 55555.0 seconds. bB1 is currently holding 0 long range cruise missiles.
![[Pasted image 20240716133314.png|400]]
<span style = "font-size: .75em">(*Visual of the planes scaled down 1:1000000)</span>

**Question**: How does bB1's position relate to bB0's position?

**Answer**: bB1 is 725,593 meters north of bB0.

#### Radius
Radial answers should b given as the amount of entities in a specific range. (Exception being question 11 and questions specifying to "name" entities similar to it.)

**Context**: At timestep 845, bB0 is a bomber on the blue team. The blue bomber bB0 is located at the coordinates (x = -3677502, y = -3959553, z = 3463011). bB0 has 29577.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 59155.0 seconds. bB0 is currently holding 15 long range cruise missiles. At timestep 845, bB1 is a bomber on the blue team. The blue bomber bB1 is located at the coordinates (x = -3221538, y = -3233178, z = 4505725). bB1 has 29577.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 59155.0 seconds. bB1 is currently holding 15 long range cruise missiles.
![[Pasted image 20240716135204.png|400]]
<span style = "font-size: .75em">(*Visual of the planes scaled down 1:1000000)</span>

**Question**: Name all entities within 1,000,000 meters of bB0?

**Answer**: bB1

2. **Context**: At timestep 4445, bB0 is a bomber on the blue team. The blue bomber bB0 is located at the coordinates (x = -3216943, y = -4125278, z = 3690716). bB0 has 27777.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 55555.0 seconds. bB0 is currently holding 9 long range cruise missiles. At timestep 4445, bB1 is a bomber on the blue team. The blue bomber bB1 is located at the coordinates (x = -3310878, y = -3405791, z = 4299388). bB1 has 27777.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 55555.0 seconds. bB1 is currently holding 0 long range cruise missiles.![[Pasted image 20240716135434.png|400]]
<span style = "font-size: .75em">(*Visual of the planes scaled down 1:1000000)</span>

**Question**: How many entities are in 400,000 meters of X?

**Answer**: 0 Entity

***Examples are shown as 2D for ease of display. The simulation should be using 3D representations of the situation.


