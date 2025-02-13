import os
from openai import OpenAI
import json





def provide_prompt(input:dict):
    
    interview_type = input["interviewType"]
    question_type = input["questionType"]
    cases:list[str] = input["cases"]

    completion = client.chat.completions.create(
        model="gpt-4o",
        messages = [
            {"role": "system", "content": "You are The world's best interviewer. You can provide Questions for any applicant coming from any background, Once I provide you with a prompt, You will ONLY provide me with the interview question and ABSOLUTELY nothing more."},
            {"role": "user", "content": f"Ask me a {interview_type} question in the category of {question_type}, specifically containing knowledge about the following subjects:\n{', '.join(cases)}\n\nNote that if the category is Technical, Purely provide a leetcode-type question for the interviewee to solve on his computer."}
        ]
    )
    prompt = completion.choices[0].message.content
    print(prompt)

    return {"prompt": prompt}


if __name__ == "__main__":
    provide_prompt({"interviewType":"Technical", "questionType":"Software", "cases":["Dynamic Programming, Tree"]})