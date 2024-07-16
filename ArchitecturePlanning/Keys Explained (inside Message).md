
*Order of coordinates are never confirmed. All are assumed to be (x, y, z)*
### Assets
1. Asset name
	1. ID
		1. ID is the same as the Asset Name.
	2. Position
		1. Position of the assets given in an array [x, y, z] using meters
	3. Velocity
		1. Velocity is given as a vector in the array [x, y, z] using meters
	4. Orientation
		1. Orientation is given as a quaternion in the array in the order [c, x, y, z]
			1. *Not confirmed in this error*
	5. Type
		1. Type is the type of asset being used
			1. Ex: bomber
		2. Known types: bomber-launcher_CL15, 
		3. Type is also denoted in the capital letters of the ID
			1. Ex: bB0 > "B" > bomber
	6. Status
		1. Status denotes the state of the asset
		2. Known states: controllable
	7. Fuel
		1. Fuel is the amount of fuel the asst has given in pounds
	8. Weapons
		1. Weapons is a dictionary denoting the variety of weapons and the amount of each weapon the asset is carrying
		2. Known types: weapon-calcm
			1. Weapon-calcm: long range cruise missile
	9. Initial Weapons
		1. Initial weapons is a dictionary denoting the variety of weapons and the amount of each weapon the asset was initially carrying
		2. Known types: **SAME AS WEAPONS**
	10. Emitting EW
		1. Emitting EW is an array containing all the objects currently contained in a planes EW beam (This is not confirmed)
		2. EW is projected like a flashlight in front of the plane and any object caught in this "beam" cannot be tracked by other assets or track other assets
	11. Fuel Burn Rate
		1. Fuel burn rate is a float denoting how fast fuel burns at a rate of pounds per second
	12. 