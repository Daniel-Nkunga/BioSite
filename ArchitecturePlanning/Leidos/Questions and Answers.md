
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
Positional answers so be given as a direction an ordinal/cardinal direction. 

The distance of an asset can be found by using the distance formula. First define the x and y coordinates of the asset you are starting from as x1 and y1. Second define the x and y coordinates of the asset you are comparing to as x2 and y2. To begin the distance formula , subtract x2 from x1 and square the resulting number. Then subtract y2 from y1 and square the resulting number. Finally add the two resulting numbers together and find the square root of that number. The resulting number from the square root is your distance from your starting asset to your comparing asset. The entire equation looks like this: distance = ((x1 - x2)^2 + (y1 - y2)^2)^(1/2)

To determine the cardinality of the asset you are comparing to relative to your starting asset, first determine if the comparing asset is in front of, behind, left, or right of the starting asset. First define the x and y coordinates of the asset you are starting from as x1 and y1. Second define the x and y coordinates of the asset you are comparing to as x2 and y2. Check if y1 is less than or equal to y2. If it is, then the comparing asset is in front of the starting asset. If y1 is grater than y2, then the comparing asset is behind the starting asset. If x1 is less than or equal to x2, then the comparing asset is to the left of the starting asset. If y1 is less than y2, then the comparing asset is in front of the starting asset.

Define the comparing asset to be in the cardinal direction north and south of starting asset if it falls between fifteen degrees left and right of a line going directly in front of and behind the starting asset. To check if the comparing asset is north of the starting asset, first establish that the comparing asset is in front of the starting asset. Then check that both of the following equations are true: y2 - y1 >= 4(x2 - x1) and y2 - y1 >= -4(x2 - x1). If either or both of these equations result in a false statement, the comparing asset is not north of the starting asset. To check if the comparing asset is south of the starting asset, first establish that the comparing asset is behind the starting asset. The check that both of the following equations are true: y2 - y1 <= 4(x2 - x1) and y2 - y1 <= -4(x2 - x1). If either or both of these equations result in a false statement, the comparing asset is not south of the starting asset. To check if the comparing asset is east of the starting asset, first establish that the comparing asset is right of the starting asset. Then check that both of the following equations are true: y2 - y1 <= (1/4)(x2 - x1) and y2 - y1 >= (-1/4)(x2 - x1). If either or both of these equations result in a false statement, the comparing asset is not east of the starting asset. To check if the comparing asset is west of the starting asset, first establish that the comparing asset is left of the starting asset. Then check that both of the following equations are true: y2 - y1 >= (1/4)(x2 - x1) and y2 - y1 <= (-1/4)(x2 - x1). If either or both of these equations result in a false statement, the comparing asset is not west of the starting asset. 

If the comparing asset is not already defined as a cardinal direction, define it as an ordinal direction. If the comparing asset is both in front of and to the right of the starting asset but it is not already defined as north or east, define it as northeast of the starting asset. If the comparing asset is both in front of and to the left of the starting asset but it is not already defined as north or west, define it as northwest of the staring asset. If the asset is both behind and to the right of the starting asset, but it is not already defined as south or east, define it as southeast of the staring asset. If the asset is both behind and to the left of the starting asset but it is not already defined as south or west, define it as southwest of the starting asset.  

Together, the distance and direction can be given as a statement describing position of the comparing asset relative to the staring asset: (Comparing asset) is (distance) meters (direction) of the (staring asset).
<hr>
# Q1
1. **Context**: At timestep 845, bB0 is a bomber on the blue team. The blue bomber bB0 is located at the coordinates (x = -3677502, y = -3959553, z = 3463011). bB0 has 29577.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 59155.0 seconds. bB0 is currently holding 15 long range cruise missiles. At timestep 845, bB1 is a bomber on the blue team. The blue bomber bB1 is located at the coordinates (x = -3221538, y = -3233178, z = 4505725). bB1 has 29577.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 59155.0 seconds. bB1 is currently holding 15 long range cruise missiles.
![[Pasted image 20240716131938.png|400]]

<span style = "font-size: .75em">(*Visual of the planes scaled down 1:1000000)</span>

**Question**: Where is bB1 relative to bB0?

**Solving**: 
First, define bB0 as the starting asset and bB1 as the comparing asset. bB0 will have its x-coordinate at -3677502 assigned to the variable x1 and its y-coordinate at -3959553 assigned to the variable y1. bB1 will have its x-coordinate at -3221538 assigned to the variable x2 and its y-coordinate at -3233178 assigned to the variable y2.

Second, find the distance between bB0 and bB1. Given the distance equation ((x1 - x2)^2 + (y1 - y2)^2)^(1/2) and the given variables (x1, x2, y1, and y2) in the equation can be replaced with their respective values resulting in the equation: distance = ((-3677502 - (-3221538))^2 + (-3959553 - (-3233178))^2)^(1/2). This equation can then be solved to get the number 857626.8477. This number can then be rounded to the nearest whole number to get the final distance of 857627.

Third, determine if bB1 is in front of, behind, left of, or right of bB0. Since y1 is less than y2, bB1 is in front of bB0. Since bB1 is in front of bB0, bB1 cannot be behind bB0. Since x1 is less than x2, bB1 is right of bB0. bB1 is in front of and to the right of bB0. Since bB1 is to the right of bB0, bB1 cannot be to the left of bB0.

Forth, we determine if the direction from bB0 to bB1 is in a cardinal direction. Since bB1 is in front of bB0, check if comparing asset is directly north of bB0. Do this by plugging in both of their coordinates into the equations y2 - y1 >= 4(x2 - x1) and y2 - y1 >= -4(x2 - x1). The resulting equations look like this: -3233178 - (-3959553) >= 4(-3221538 - (-3677502)) and -3233178 - (-3959553) >= -4(-3221538 - (-3677502)). The equations result in one false statement since 726375 is not greater than or equal to 1823856 and one true statement since 726375 is greater than or equal to -1823856. Since both equations are not true, bB1 is not north of bB0. Since comparing asset is in front of bB0, in cannot be south of bB0. Since bB1 is to the right of bB0, check if bB1 is directly east of bB0. Do this by plugging in both of their coordinates into the equations y2 - y1 <= (1/4)(x2 - x1) and y2 - y1 >= (-1/4)(x2 - x1). The resulting equations look like this: -3233178 - (-3959553) <= (1/4)(-3221538 - (-3677502)) and -3233178 - (-3959553) >= (-1/4)(-3221538 - (-3677502)). The equations result in one false statement since 726375 is not lesser than or equal to 113991.0 and one true statement since 726375 is greater than or equal to 113991.0. Since both equations are not true, comparing asset is not east of bB0. Since comparing asset is not to the left of bB0, it cannot be west of bB0. 

Fifth, since bB1 was not directly north, south, east, or west of bB0, find which direction bB1 is relative to bB0 using ordinal directions. Since bB1 is both in front of and to the right of bB0, it is northeast of bB0. Since bB1 is northeast of bB0, it cannot be any other ordinal direction. Since both the distance of bB1 relative to bB0 are known, bB1's position relative to bB0 can be stated. bB1 is 857627 meters northeast of bB0.

Since both the distance of bB1 relative to bB0 are known, bB1's position relative to bB0 can be stated. bB1 is 857627 meters northeast of bB0.

**Answer**: bB1 is 857,627 meters northeast of bB0.

<hr>

# Q2
2. **Context**: At timestep 4445, bB0 is a bomber on the blue team. The blue bomber bB0 is located at the coordinates (x = -3216943, y = -4125278, z = 3690716). bB0 has 27777.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 55555.0 seconds. bB0 is currently holding 9 long range cruise missiles. At timestep 4445, bB1 is a bomber on the blue team. The blue bomber bB1 is located at the coordinates (x = -3310878, y = -3405791, z = 4299388). bB1 has 27777.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 55555.0 seconds. bB1 is currently holding 0 long range cruise missiles.
![[Pasted image 20240716133314.png|400]]
<span style = "font-size: .75em">(*Visual of the planes scaled down 1:1000000)</span>

**Question**: How does bB1's position relate to bB0's position?

**Solving**: 
First, define bB0 as the starting asset and bB1 as the comparing asset. bB0 will have its x-coordinate at -3216943 assigned to the variable x1 and its y-coordinate at -4125278 assigned to the variable y1. bB1 will have its x-coordinate at -3310878 assigned to the variable x2 and its y-coordinate at -3405791 assigned to the variable y2.

Second, find the distance between bB0 and bB1. Given the distance equation ((x1 - x2)^2 + (y1 - y2)^2)^(1/2) and the given variables (x1, x2, y1, and y2) in the equation can be replaced with their respective values resulting in the equation: distance = ((-3216943 - (-3310878))^2 + (-4125278 - (-3405791))^2)^(1/2). This equation can then be solved to get the number 725593.0866. This number can then be rounded to the nearest whole number to get the final distance of 725593.

Third, determine if bB1 is in front of, behind, left of, or right of bB0. Since y1 is less than y2, bB1 is in front of bB0. Since bB1 is in front of bB0, bB1 cannot be behind bB0. Since x1 is less than x2, bB1 is right of bB0. bB1 is in front of and to the right of bB0. Since bB1 is to the right of bB0, bB1 cannot be to the left of bB0.

Forth, we determine if the direction from bB0 to bB1 is in a cardinal direction. Since bB1 is in front of bB0, check if comparing asset is directly north of bB0. Do this by plugging in both of their coordinates into the equations y2 - y1 >= 4(x2 - x1) and y2 - y1 >= -4(x2 - x1). The resulting equations look like this: -3405791 - (-4125278) >= 4(-3310878 - (-3216943)) and -3405791 - (-4125278) >= -4(-3310878 - (-3216943)). The equations result in one false statement since 719487 is not greater than or equal to -375740 and one true statement since 719487 is greater than or equal to 375740. Since both equations are not true, bB1 is not north of bB0. Since comparing asset is in front of bB0, in cannot be south of bB0. Since bB1 is to the right of bB0, check if bB1 is directly east of bB0. Do this by plugging in both of their coordinates into the equations y2 - y1 <= (1/4)(x2 - x1) and y2 - y1 >= (-1/4)(x2 - x1). The resulting equations look like this: -3405791 - (-4125278) <= (1/4)(-3310878 - (-3216943)) and -3405791 - (-4125278) >= (-1/4)(-3310878 - (-3216943)). The equations result in one false statement since 719487 is not lesser than or equal to -23483.75 and one true statement since 719487 is greater than or equal to -23483.75. Since both equations are not true, comparing asset is not east of bB0. Since comparing asset is not to the left of bB0, it cannot be west of bB0. 

Fifth, since bB1 was not directly north, south, east, or west of bB0, find which direction bB1 is relative to bB0 using ordinal directions. Since bB1 is both in front of and to the right of bB0, it is northeast of bB0. Since bB1 is northeast of bB0, it cannot be any other ordinal direction. Since both the distance of bB1 relative to bB0 are known, bB1's position relative to bB0 can be stated. bB1 is 725593 meters northeast of bB0.

Since both the distance of bB1 relative to bB0 are known, bB1's position relative to bB0 can be stated. bB1 is 725593 meters northeast of bB0.

**Answer**: bB1 is 725593 meters north of bB0.

<hr>

1. **Context**: At timestep 845, bB0 is a bomber on the blue team. The blue bomber bB0 is located at the coordinates (x = -3677502, y = -3959553, z = 3463011). bB0 has 29577.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 59155.0 seconds. bB0 is currently holding 15 long range cruise missiles. At timestep 845, bB1 is a bomber on the blue team. The blue bomber bB1 is located at the coordinates (x = -3221538, y = -3233178, z = 4505725). bB1 has 29577.5 pounds of fuel and burns it at a rate of 0.5 pounds per second meaning it should run out of fuel in 59155.0 seconds. bB1 is currently holding 15 long range cruise missiles.
![[Pasted image 20240716131938.png|400]]

<span style = "font-size: .75em">(*Visual of the planes scaled down 1:1000000)</span>

**Question**: Where is bB1 relative to bB0?

**Solving**: 
First, define bB0 as the starting asset and bB1 as the comparing asset. bB0 will have its x-coordinate at -3677502 assigned to the variable x1 and its y-coordinate at -3959553 assigned to the variable y1. bB1 will have its x-coordinate at -3221538 assigned to the variable x2 and its y-coordinate at -3233178 assigned to the variable y2. 

Second, find the distance between bB0 and bB1. Given the distance equation ((x1 - x2)^2 + (y1 - y2)^2)^(1/2) and the variables given, x1, x2, y1, and y2 in the equation can be replaced with their known values resulting in the equation: distance = ((-3677502 - (-3221538))^2 + (-3959553 - (-3233178))^2)^(1/2). This equation can then be solved to get the number 857626.8477. This number can then be rounded to the nearest whole number to get the final distance of 857,627.

Third, determine if bB1 is in front of, behind, left of, or right of bB0. Since y1 is less than y2, bB1 is in front of bB0. Since x1 is less than x2, bB1 is right of bB0. bB1 is in front of and to the right of bB0.

Forth, we determine if the direction from bB0 to bB1 is in a cardinal direction. Since bB1 is in front of bB0, check if bB1 is directly north of bB0. Do this by plugging in both of their coordinates into the equations y2 - y1 >= 15(x2 - x1) and y2 - y1 >= -15(x2 - x1). The resulting equations look like this: -3233178 - (-3959553) >= 15(-3221538 - (-3677502)) and -3233178 - (-3959553) >= -15(-3221538 - (-3677502)). The equations result in one false statement since 726375 is not greater than or equal to 50330160 and one true statement since 726375 is greater than or equal to -50330160. Since both equations are not true, bB1 is not north of bB0. Since bB1 is in front of bB0, in cannot be south of bB0. Since bB1 is to the right of bB0, check if bB1 is directly east of bB0. Do this by plugging in both of their coordinates into the equations y2 - y1 <= (1/15)(x2 - x1) and y2 - y1 >= (-1/15)(x2 - x1). The resulting equations look like this: -3233178 - (-3959553) <= (1/15)(-3221538 - (-3677502)) and -3233178 - (-3959553) >= (-1/15)(-3221538 - (-3677502)). The equations result in one false statement since 726375 is not lesser than or equal to 223689.6 and one true statement since 726375 is greater than or equal to -223689.6. Since both equations are not true, bB1 is not east of bB0. Since bB1 is not to the left of bB0, it cannot be west of bB0. 

Fifth, since bB1 was not directly north, south, east, or west of bB0, find which direction bB1 is relative to bB0 using ordinal directions. Since bB1 is both in front of and to the right of bB0, it is northeast of bB0. Since bB1 is northeast of bB0, it cannot be any other cardinal direction. 

Since both the distance of bB1 relative to bB0 are known, bB1's position relative to bB0 can be stated. bB1 is 857,627 meters northeast of bB0.

**Answer**: bB1 is 857,627 meters northeast of bB0.

**Answer**: bB1 is 725,593 meters north of bB0.

#### Radius
Radial answers should b given as the amount of entities in a specific range. (Exception being question 11 and questions specifying to "name" entities similar to it.) To determine if a target asset $(x_2, y_2)$ falls in the radius of of a selected asset $(x_1, y_1)$, $| \sqrt{x_1 ^2 + y_1 ^2} - \sqrt{x_2 ^2 + y_2 ^2}| \leq radius$ must result in a true statement.

<hr>


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

[[Outdated Q&A]]
