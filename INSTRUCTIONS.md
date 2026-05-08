# Development Instructions

Follow this workflow for all future changes:

1. Sync local `master` first:
   - `git checkout master`
   - `git pull --ff-only origin master`

2. Create a **new branch** for every change:
   - `git checkout -b <short-feature-name>`
   - Example: `git checkout -b update-admissions-copy`

3. Make and test your changes on that branch only.

4. Commit changes with a clear message:
   - `git add .`
   - `git commit -m "Describe why this change is needed"`

5. Push the branch to remote:
   - `git push -u origin <short-feature-name>`

6. Open a pull request with the final changes:
   - Base branch: `master`
   - Compare branch: your feature branch
   - Include:
     - What changed
     - Why it changed
     - How it was tested

Do not push new feature changes directly to `master`.
