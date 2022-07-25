import {Injectable, Logger} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {ClientSecretCredential} from '@azure/identity';
import {Client} from '@microsoft/microsoft-graph-client';
import {TokenCredentialAuthenticationProvider} from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import {EnvironmentConfig} from '@shared/models/env/environment-config.model';

@Injectable()
export class EmailsRepository {
  private readonly logger = new Logger(EmailsRepository.name);

  private readonly GRAPH_API_SCOPES = ['https://graph.microsoft.com/.default'];

  client: Client;

  constructor(private readonly configService: ConfigService<EnvironmentConfig, true>) {
    const credential = new ClientSecretCredential(
      configService.get('GRAPH_TENANT_ID'),
      configService.get('GRAPH_CLIENT_ID'),
      configService.get('GRAPH_CLIENT_SECRET'),
    );

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: this.GRAPH_API_SCOPES,
    });

    this.client = Client.initWithMiddleware({
      authProvider: authProvider,
    });
  }

  async send(subject: string, content: string, recipients: string[]): Promise<any> {
    this.logger.log(`Sending emails to ${recipients.join(', ')}`);

    return await this.client.api(`/users/${this.configService.get('GRAPH_CLIENT_SENDER')}/sendMail`).post({
      message: {
        subject: subject,
        toRecipients: recipients.map(value => ({
          emailAddress: {
            address: value,
          },
        })),
        body: {
          content: content,
          contentType: 'html',
        },
      },
    });
  }
}
