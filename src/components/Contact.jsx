import React from 'react'

const Contact = () => {
  return (
    <Section title = "Contact Me!" subtitle = "Feel free to reach out to me! Would love to hear from all of you!"> 
    
        <div className="p-8 text-left w-full">
            <form action="" method = "POST">
                <div className="gap-4 w-full">
                    <div className="flex flex.col">
                        <label className="capitalize text-sm py-2 font-extralight">
                            name
                        </label>
                        <input type="text" name="name" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"></input>
                    </div>
                </div>
            </form>
        </div>
    </Section>
  )
}

export default Contact
