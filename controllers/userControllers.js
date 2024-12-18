import User from '../models/usermodel.js';

export const create_User = async (req,res)=> {
    try{
        const userData=new User(req.body);
        if(!userData){
            res.status(404).json({msg:"Data not found!!"});   
        }
        await userData.save();
        res.status(200).json({msg:"Done User Created👨🥸📂!!!"});
    }catch(error){
        res.status(500).json({error:"error"});
    }

}


export const getUser = async (req,res)=> {
    try{
        const id=req.params.id;
        const userData= await User.findById(id);
        if(!userData){
            return res.status(404).json({msg:"Data not found!!"});   
        }
        return res.status(200).json({userData});
    }catch(error){
        return res.status(500).json({error:"error"});
    }
}


export const getall = async (req,res)=> {
    try{
        const userData= await User.find();
        if(!userData){
            res.status(404).json({msg:"Data not found!!"});   
        }
        res.status(200).json({userData});
    }catch(error){
        res.status(500).json({error:"error"});
    }

}

export const update = async (req,res)=> {
    try{
        const userData= await User(req.body);
        if(!userData.email){
            res.status(404).json({msg:"Data not found!!"});   
        }
        const updatedData = await User.findOneAndUpdate( 
            { email: userData.email }, 
            { name: userData.name, age: userData.age, password: userData.password }, 
            { new: true });
        res.status(200).json({updatedData});
    }catch(error){
        res.status(500).json({error:"error"});
    }
}

export const deleteUser = async (req,res)=> {
    try{
        const userData= req.body;
        if(!userData.email){
            res.status(404).json({msg:"Data not found!!"});   
        }
        const updatedData = await User.findOneAndDelete( 
            { email: userData.email });
        res.status(200).json({updatedData});
    }catch(error){
        res.status(500).json({error:"error"});
    }
}