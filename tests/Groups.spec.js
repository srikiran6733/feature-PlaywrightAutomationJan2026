import{test,expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log(" This is the beforeAll test block....")
})

test.afterAll(async()=>{
    console.log(" This is the afterAll test block....")
})

test.beforeEach(async()=>{
    console.log(" This is the beforeEach test block....")
})

test.afterEach(async()=>{
    console.log(" This is the afterEach test block....")
})

test.describe("Group-1",()=>{

test("Test-1", async ({page})=>{

    console.log(" This is test-1 block....")
})
test("Test-2", async ({page})=>{

    console.log(" This is test-2 block....")
})
})


test.describe("Group-2",()=>{
test("Test-3", async ({page})=>{

    console.log(" This is test-3 block....")
})

test("Test-4", async ({page})=>{

    console.log(" This is test-4 block....")
})
    
})
