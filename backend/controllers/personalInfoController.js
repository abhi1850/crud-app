import PersonalInfo from '../models/PersonalInfo.js';

export const getAllPersonalInfo = async (req, res) => {
  try {
    const data = await PersonalInfo.find().sort({ updatedDate: -1 });
    res.json({ Message: 'Successfully Fetched Data', response: data });
  } catch (error) {
    res.status(500).json({
      Message: 'Error inside server',
      Error: error.message,
    });
  }
};

export const getPersonalInfoById = async (req, res) => {
  try {
    const data = await PersonalInfo.findById(req.params.id);
    if (!data) return res.status(404).json({ Message: 'No data found' });
    res.json({ Message: 'Successfully Fetched Data', response: data });
  } catch (error) {
    res.status(500).json({
      Message: 'Error inside server',
      Error: error.message,
    });
  }
};

export const addPersonalInfo = async (req, res) => {
  try {
    const newData = new PersonalInfo({ ...req.body, updatedDate: new Date() });
    const savedData = await newData.save();
    res.json({ Message: 'Data Successfully Added', response: savedData });
  } catch (error) {
    res.status(500).json({
      Message: 'Error inside server',
      Error: error.message,
    });
  }
};

export const updatePersonalInfo = async (req, res) => {
  try {
    const updatedData = await PersonalInfo.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedDate: new Date() },
      { new: true },
    );
    res.json({ Message: 'Data Successfully Updated', response: updatedData });
  } catch (error) {
    res.status(500).json({
      Message: 'Error inside server',
      Error: error.message,
    });
  }
};

export const deletePersonalInfo = async (req, res) => {
  try {
    await PersonalInfo.findByIdAndDelete(req.params.id);
    res.json({ Message: 'Data Successfully Deleted' });
  } catch (error) {
    res.status(500).json({
      Message: 'Error inside server',
      Error: error.message,
    });
  }
};
