use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Emu {
    id: u8,
    memory: Vec<u8>
}

#[wasm_bindgen]
impl Emu {
    pub fn init_emu() -> Emu {
        let memory = Vec::with_capacity(0xffff);
        Emu {
            id: 9,
            memory: memory
        }
    }

    pub fn get_id(&self) -> u8 {
        self.id
    }

    pub fn set_id(&mut self, new_id: u8) {
        self.id = new_id;
    } 
}

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
