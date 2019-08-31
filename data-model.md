## Data Model

# Table Relationships:

Projects (one) <==> Tasks (many)
Projects (many) <==> Resources (many)

# Table Details

projects:
- id
- name (required)
- description
- completed (booleen, not NULL, default false)

resources:
- id
- name (required, unique value)
- description

tasks:
- id
- description (required)
- notes
- completed (booleen, not NULL, default false)

project_resources:
- project_id
- resource_id