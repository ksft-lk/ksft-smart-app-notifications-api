export enum DocumentStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
}

export class DocumentTimestampConfig {
  createdAt: Date;
  updatedAt: Date;
}
