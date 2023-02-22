import Vehicle from "../Models/Vehicle.js";

export const createVehicles = async (req, res) => {
  const { plates, name, lastName, product, timeOff } = req.body;

  console.log(req.body);

  //Create a new Vehicle
  const newVehicle = new Vehicle({
    plates,
    name,
    lastName,
    product,
    timeOff,
  });

  const vehicleSaved = await newVehicle.save();

  res.status(201).json(vehicleSaved);
};

export const getVehicles = async (req, res) => {
  const Vehicles = await Vehicle.find();
  res.json(Vehicles);
};

export const getVehicle = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.vehicleId);
  res.status(200).json(vehicle);
};

export const updateVehicles = async (req, res) => {
  const vehicles = await Vehicle.findByIdAndUpdate(
    req.params.vehicleId,
    req.body,
    {
      new: true,
    } //Here, this give me the vehicle new( edited ), It don't give me the old vehicle
  );

  res.status(200).json(vehicles);
};

export const deleteVehicles = async (req, res) => {
  const { vehicleId } = req.params;
  await Vehicle.findByIdAndDelete(vehicleId);
  res.status(200).json();
};
