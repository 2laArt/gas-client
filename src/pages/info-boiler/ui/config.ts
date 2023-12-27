export interface IInteractiveSigns {
  name: string
  id: number
  text: string
}

export const interactiveSigns = [
  {
    name: 'electric-boiler',
    id: 1,
    text: 'An electric boiler is a device that uses electrical energy to boil water for heating or other purposes. It is different from a gas or oil boiler because it does not use fossil fuels as a source of heat. Instead, it relies on electricity, which can be generated from renewable sources. Electric boilers are nearly 100% energy-efficient, meaning they waste very little energy in the process of heating water.\
    However, they also have higher running costs than gas or oil boilers, and they may not be suitable for large homes or areas with high electricity prices. There are different types of electric boilers, such as classic, ionic, or induction.\
    These vary in their power output, energy performance, model type, energy consumption, and energy efficiency. The size and type of electric boiler you need depends on your home’s heating and hot water demand, as well as the availability and cost of electricity in your area. Electric boilers are a good option for homes that are not connected to the gas grid, or that want to reduce their carbon emissions.\
    However, they are not the only alternative to gas boilers. Other options include heat pumps, biomass boilers, solar water heaters, and hybrid systems. These may have different advantages and disadvantages depending on your home’s characteristics and needs',
  },
  {
    name: 'gas-valve',
    id: 2,
    text: 'Ball valves: These have a spherical closure element that rotates to open or close the valve. They provide tight shut-off and easy operation. Butterfly valves: These have a disc-shaped closure element that pivots to regulate the flow. They are suitable for large pipes and low-pressure applications,\
    Gate valves: These have a sliding gate that moves up or down to block or allow the flow. They are used for on/off control and minimal throttling   Globe valves: These have a plug-shaped closure element that moves in and out of a seat to adjust the flow. They are used for throttling and flow regulation. \
    Needle valves: These have a slender, tapered closure element that fits into a narrow seat to control the flow. They are used for precise adjustment and low-flow applications',
  },
  {
    name: 'heat-sink',
    id: 3,
    text: 'A heat sink works by increasing the surface area and the fluid flow around the hot component. The heat sink usually has fins or other protrusions that create more contact with the fluid and enhance the heat transfer. The fluid can be either passive, meaning it moves naturally by convection, or active, meaning it is forced by a fan or a pump1 There are different types of heat sinks, depending on their shape, size, material, and performance. Some common types are:\
    Straight fin heat sink: This has parallel fins that extend from a base. It is simple and cheap, but it can suffer from poor airflow and high thermal resistance, Flared fin heat sink: This has fins that spread out from a base.\
    It has better airflow and lower thermal resistance than a straight fin heat sink, but it is more expensive and bulky, Pin fin heat sink: This has cylindrical pins that protrude from a base.\
    It has high surface area and good airflow, but it can be difficult to manufacture and clean, Heat pipe heat sink: This has hollow tubes that contain a liquid that evaporates and condenses to transfer heat. It has high thermal conductivity and can transport heat over long distances, but it is complex and sensitive to orientation13',
  },
  {
    name: 'interface',
    id: 4,
    text: 'An interface is a point of communication or interaction between two or more systems, devices, programs, or users. It can also define the rules, methods, or formats for such communication or interaction. Interfaces are important for enabling interoperability, compatibility, and usability among different systems, devices, programs, or users. They can also enhance the functionality, performance, and security of such systems, devices, programs, or users',
  },
  {
    name: 'thermostat',
    id: 5,
    text: 'A thermostat is a device that controls the temperature of a system, such as a heating or cooling device, by switching it on or off as needed. A thermostat works by sensing the temperature of the system and comparing it to a desired setpoint. If the temperature is too high or too low, the thermostat activates or deactivates the system to bring the temperature closer to the setpoint.\
    Mechanical thermostats:\
    These use physical mechanisms, such as bimetallic strips or gas-filled bellows, that expand or contract with temperature changes. These movements trigger electrical contacts that switch the system on or off,\
    Electronic thermostats: These use electronic sensors, such as thermistors or thermocouples, that change their electrical resistance or voltage with temperature changes. These signals are processed by a circuit that switches the system on or off,\
    Smart thermostats: These are digital thermostats that can be programmed, adjusted, or monitored remotely via the internet. They can also learn from the user’s behavior and preferences, and adjust the temperature accordingly',
  },
  {
    name: 'pump',
    id: 6,
    text: 'A pump is a device that moves fluids (liquids or gases) from one place to another by applying mechanical action. Pumps can be classified by the way they transfer energy to the fluid, such as positive-displacement, kinetic, or electromagnetic pumps. Pumps are used for various purposes, such as pumping water, oil, gas, air, or blood.\
    Some examples of pumps are: A water pump is a device that raises or transports water for irrigation, drinking, or sanitation. It can be powered by electricity, wind, solar, or human or animal labor.\
    An oil pump is a device that circulates oil in an engine or a hydraulic system. It can be driven by a belt, a chain, or a gear from the crankshaft or the camshaft.\
    A gas pump is a device that dispenses gasoline, diesel, or other fuels into a vehicle’s tank. It can be operated by a handle, a button, or a card reader.\
    An air pump is a device that compresses or inflates air for various applications, such as tires, balloons, mattresses, or diving equipment. It can be manual, electric, or pneumatic.\
    A blood pump is a device that circulates blood in a patient’s body during a surgery or a treatment. It can be part of a heart-lung machine, a dialysis machine, or an artificial heart',
  },
  {
    name: 'relay-unit',
    id: 7,
    text: 'A relay unit is a device that uses an electric signal to switch another circuit on or off. It can be used to control high-voltage or high-current circuits with low-voltage or low-current signals. A relay unit consists of an input part, called the coil, and an output part, called the contacts. The coil is an electromagnet that activates the contacts when it receives an electric current. The contacts are switches that open or close the circuit that is being controlled by the relay unit.\
    There are different types of relay units, depending on their function and design. Some common types are:\
    Electromechanical relay unit: This type of relay unit has mechanical contacts that are moved by the magnetic force of the coil. It can handle high currents and voltages, but it is slow, noisy, and prone to wear and tear.\
    Solid-state relay unit: This type of relay unit has no moving parts, but uses semiconductor devices, such as transistors or MOSFETs, to switch the circuit. It is fast, silent, and reliable, but it can generate heat and require cooling.\
    Reed relay unit: This type of relay unit has contacts that are sealed in a glass tube filled with inert gas. The contacts are thin metal strips that bend when a magnetic field is applied by the coil.',
  },
  {
    name: 'valve',
    id: 8,
    text: 'A valve is a device that controls the flow of a fluid (liquid or gas) in a pipe or a system. It can be used to start, stop, or regulate the flow, depending on the needs of the application. A valve usually has two main parts: a body and a bonnet. The body is the part that connects to the pipe or the system, and contains the internal components that perform the valve function. The bonnet is the part that covers the body, and provides access to the internal components for maintenance or repair.\
    There are many types of valves, depending on their function, design, and operation. Some common types are:\
    Ball valve: This type of valve has a spherical closure element (ball) that rotates to open or close the valve. It is simple, reliable, and easy to operate.\
    Gate valve: This type of valve has a sliding gate that moves up or down to block or allow the flow. It is used for on/off control and minimal throttling.\
    Globe valve: This type of valve has a plug-shaped closure element that moves in and out of a seat to adjust the flow. It is used for throttling and flow regulation.\
    Check valve: This type of valve allows the flow in one direction only, and prevents backflow. It is used for safety and protection purposes12',
  },
]
