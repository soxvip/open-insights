export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      ai_agent_instances: {
        Row: {
          agent_id: string
          created_at: string
          deployed_at: string | null
          id: string
          instance_name: string
          instance_token: string
          is_deployed: boolean
          profile_name: string | null
          updated_at: string
          whatsapp_number: string | null
        }
        Insert: {
          agent_id: string
          created_at?: string
          deployed_at?: string | null
          id?: string
          instance_name: string
          instance_token: string
          is_deployed?: boolean
          profile_name?: string | null
          updated_at?: string
          whatsapp_number?: string | null
        }
        Update: {
          agent_id?: string
          created_at?: string
          deployed_at?: string | null
          id?: string
          instance_name?: string
          instance_token?: string
          is_deployed?: boolean
          profile_name?: string | null
          updated_at?: string
          whatsapp_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_agent_instances_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_agent_webhooks: {
        Row: {
          add_url_events: boolean
          add_url_types_messages: boolean
          agent_id: string
          created_at: string
          enabled: boolean
          events: string[]
          exclude_messages: string[]
          id: string
          instance_token: string
          last_response: Json | null
          last_status: string | null
          name: string
          updated_at: string
          url: string
          webhook_action: string | null
          webhook_id: string | null
        }
        Insert: {
          add_url_events?: boolean
          add_url_types_messages?: boolean
          agent_id: string
          created_at?: string
          enabled?: boolean
          events?: string[]
          exclude_messages?: string[]
          id?: string
          instance_token: string
          last_response?: Json | null
          last_status?: string | null
          name: string
          updated_at?: string
          url: string
          webhook_action?: string | null
          webhook_id?: string | null
        }
        Update: {
          add_url_events?: boolean
          add_url_types_messages?: boolean
          agent_id?: string
          created_at?: string
          enabled?: boolean
          events?: string[]
          exclude_messages?: string[]
          id?: string
          instance_token?: string
          last_response?: Json | null
          last_status?: string | null
          name?: string
          updated_at?: string
          url?: string
          webhook_action?: string | null
          webhook_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_agent_webhooks_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_agents: {
        Row: {
          base_prompt: string | null
          context_max_messages: number
          context_min_messages: number
          context_time_window_hours: number
          created_at: string
          diversity_level: number
          frequency_penalty: number
          id: string
          is_active: boolean
          max_message_length: number
          max_tokens: number
          message_receive_delay_seconds: number
          model: string
          name: string
          Nome_da_instância: string | null
          presence_penalty: number
          provider: string
          read_messages: boolean
          sign_messages: boolean
          temperature: number
          Token_instância: string | null
          typing_delay_seconds: number
          updated_at: string
          user_id: string
          whatsapp_number: string | null
        }
        Insert: {
          base_prompt?: string | null
          context_max_messages?: number
          context_min_messages?: number
          context_time_window_hours?: number
          created_at?: string
          diversity_level?: number
          frequency_penalty?: number
          id?: string
          is_active?: boolean
          max_message_length?: number
          max_tokens?: number
          message_receive_delay_seconds?: number
          model?: string
          name: string
          Nome_da_instância?: string | null
          presence_penalty?: number
          provider?: string
          read_messages?: boolean
          sign_messages?: boolean
          temperature?: number
          Token_instância?: string | null
          typing_delay_seconds?: number
          updated_at?: string
          user_id: string
          whatsapp_number?: string | null
        }
        Update: {
          base_prompt?: string | null
          context_max_messages?: number
          context_min_messages?: number
          context_time_window_hours?: number
          created_at?: string
          diversity_level?: number
          frequency_penalty?: number
          id?: string
          is_active?: boolean
          max_message_length?: number
          max_tokens?: number
          message_receive_delay_seconds?: number
          model?: string
          name?: string
          Nome_da_instância?: string | null
          presence_penalty?: number
          provider?: string
          read_messages?: boolean
          sign_messages?: boolean
          temperature?: number
          Token_instância?: string | null
          typing_delay_seconds?: number
          updated_at?: string
          user_id?: string
          whatsapp_number?: string | null
        }
        Relationships: []
      }
      campaign_analytics: {
        Row: {
          campaign_id: string
          created_at: string | null
          date: string | null
          hour: number | null
          id: string
          metric_name: string
          metric_value: number
          user_id: string
        }
        Insert: {
          campaign_id: string
          created_at?: string | null
          date?: string | null
          hour?: number | null
          id?: string
          metric_name: string
          metric_value: number
          user_id: string
        }
        Update: {
          campaign_id?: string
          created_at?: string | null
          date?: string | null
          hour?: number | null
          id?: string
          metric_name?: string
          metric_value?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_analytics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_contacts: {
        Row: {
          campaign_id: string
          created_at: string
          error_message: string | null
          id: string
          phone: string
          sent_at: string | null
          status: string
        }
        Insert: {
          campaign_id: string
          created_at?: string
          error_message?: string | null
          id?: string
          phone: string
          sent_at?: string | null
          status?: string
        }
        Update: {
          campaign_id?: string
          created_at?: string
          error_message?: string | null
          id?: string
          phone?: string
          sent_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_contacts_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_logs: {
        Row: {
          campaign_id: string
          created_at: string | null
          id: string
          log_type: string
          message: string
          metadata: Json | null
          user_id: string
        }
        Insert: {
          campaign_id: string
          created_at?: string | null
          id?: string
          log_type: string
          message: string
          metadata?: Json | null
          user_id: string
        }
        Update: {
          campaign_id?: string
          created_at?: string | null
          id?: string
          log_type?: string
          message?: string
          metadata?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_logs_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_media: {
        Row: {
          campaign_id: string
          created_at: string
          file_name: string | null
          file_size: number | null
          id: string
          media_type: string
          media_url: string
        }
        Insert: {
          campaign_id: string
          created_at?: string
          file_name?: string | null
          file_size?: number | null
          id?: string
          media_type: string
          media_url: string
        }
        Update: {
          campaign_id?: string
          created_at?: string
          file_name?: string | null
          file_size?: number | null
          id?: string
          media_type?: string
          media_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_media_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_settings: {
        Row: {
          campaign_id: string
          created_at: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string | null
          user_id: string
        }
        Insert: {
          campaign_id: string
          created_at?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string | null
          user_id: string
        }
        Update: {
          campaign_id?: string
          created_at?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_settings_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          ai_config: Json | null
          ai_enabled: boolean | null
          campaign_name: string
          campaign_type: string | null
          created_at: string
          delay_max: number | null
          delay_min: number | null
          engagement_rate: number | null
          execution_config: Json | null
          failed_messages: number
          id: string
          instance_name: string
          message: string
          opened_messages: number | null
          priority: number | null
          scheduled_at: string | null
          sent_messages: number
          status: string
          success_rate: number
          tags: string[] | null
          total_contacts: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          ai_config?: Json | null
          ai_enabled?: boolean | null
          campaign_name: string
          campaign_type?: string | null
          created_at?: string
          delay_max?: number | null
          delay_min?: number | null
          engagement_rate?: number | null
          execution_config?: Json | null
          failed_messages?: number
          id?: string
          instance_name: string
          message: string
          opened_messages?: number | null
          priority?: number | null
          scheduled_at?: string | null
          sent_messages?: number
          status?: string
          success_rate?: number
          tags?: string[] | null
          total_contacts?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          ai_config?: Json | null
          ai_enabled?: boolean | null
          campaign_name?: string
          campaign_type?: string | null
          created_at?: string
          delay_max?: number | null
          delay_min?: number | null
          engagement_rate?: number | null
          execution_config?: Json | null
          failed_messages?: number
          id?: string
          instance_name?: string
          message?: string
          opened_messages?: number | null
          priority?: number | null
          scheduled_at?: string | null
          sent_messages?: number
          status?: string
          success_rate?: number
          tags?: string[] | null
          total_contacts?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          active: boolean | null
          bot_message: string | null
          conversation_id: string | null
          created_at: string | null
          id: number
          message_type: string | null
          phone: string | null
          user_id: string
          user_message: string | null
        }
        Insert: {
          active?: boolean | null
          bot_message?: string | null
          conversation_id?: string | null
          created_at?: string | null
          id?: number
          message_type?: string | null
          phone?: string | null
          user_id: string
          user_message?: string | null
        }
        Update: {
          active?: boolean | null
          bot_message?: string | null
          conversation_id?: string | null
          created_at?: string | null
          id?: number
          message_type?: string | null
          phone?: string | null
          user_id?: string
          user_message?: string | null
        }
        Relationships: []
      }
      chats: {
        Row: {
          app: string | null
          conversation_id: string | null
          created_at: string | null
          id: number
          phone: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          app?: string | null
          conversation_id?: string | null
          created_at?: string | null
          id?: number
          phone?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          app?: string | null
          conversation_id?: string | null
          created_at?: string | null
          id?: number
          phone?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      contact_lists: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          tags: string[] | null
          total_contacts: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          tags?: string[] | null
          total_contacts?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          tags?: string[] | null
          total_contacts?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      contact_tags: {
        Row: {
          color: string
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string
          email: string | null
          id: string
          last_message_sent: string | null
          list_id: string
          metadata: Json | null
          nome: string
          status: string
          tags: string[] | null
          telefone: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          last_message_sent?: string | null
          list_id: string
          metadata?: Json | null
          nome?: string
          status?: string
          tags?: string[] | null
          telefone: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          last_message_sent?: string | null
          list_id?: string
          metadata?: Json | null
          nome?: string
          status?: string
          tags?: string[] | null
          telefone?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contacts_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "contact_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      dados_cliente: {
        Row: {
          created_at: string | null
          id: number
          Nome_cliente: string | null
          sessionid: string | null
          telefone: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          Nome_cliente?: string | null
          sessionid?: string | null
          telefone?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          Nome_cliente?: string | null
          sessionid?: string | null
          telefone?: string | null
          user_id?: string
        }
        Relationships: []
      }
      daily_analytics: {
        Row: {
          active_instances: number
          avg_success_rate: number
          created_at: string
          date: string
          id: string
          peak_hour: number | null
          total_campaigns: number
          total_messages_failed: number
          total_messages_sent: number
          updated_at: string
          user_id: string
        }
        Insert: {
          active_instances?: number
          avg_success_rate?: number
          created_at?: string
          date?: string
          id?: string
          peak_hour?: number | null
          total_campaigns?: number
          total_messages_failed?: number
          total_messages_sent?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          active_instances?: number
          avg_success_rate?: number
          created_at?: string
          date?: string
          id?: string
          peak_hour?: number | null
          total_campaigns?: number
          total_messages_failed?: number
          total_messages_sent?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      disparo_templates: {
        Row: {
          created_at: string
          id: string
          missing_media: Json
          name: string
          state: Json
          stats: Json
          updated_at: string
          user_id: string
          version: string
        }
        Insert: {
          created_at?: string
          id?: string
          missing_media?: Json
          name: string
          state?: Json
          stats?: Json
          updated_at?: string
          user_id: string
          version?: string
        }
        Update: {
          created_at?: string
          id?: string
          missing_media?: Json
          name?: string
          state?: Json
          stats?: Json
          updated_at?: string
          user_id?: string
          version?: string
        }
        Relationships: []
      }
      dispatch_contact_tracking: {
        Row: {
          campaign_name: string | null
          contact_name: string | null
          contact_phone: string
          created_at: string
          id: string
          instance_name: string | null
          list_id: string | null
          sent_at: string
          success: boolean
          user_id: string
        }
        Insert: {
          campaign_name?: string | null
          contact_name?: string | null
          contact_phone: string
          created_at?: string
          id?: string
          instance_name?: string | null
          list_id?: string | null
          sent_at?: string
          success?: boolean
          user_id: string
        }
        Update: {
          campaign_name?: string | null
          contact_name?: string | null
          contact_phone?: string
          created_at?: string
          id?: string
          instance_name?: string | null
          list_id?: string | null
          sent_at?: string
          success?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dispatch_contact_tracking_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "contact_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      dispatch_jobs: {
        Row: {
          completed_at: string | null
          config: Json
          contacts: Json
          created_at: string
          current_index: number
          error_count: number
          error_details: Json | null
          estimated_duration: number | null
          execution_log: Json | null
          id: string
          job_name: string
          messages: Json
          next_execution_at: string | null
          priority: number
          scheduled_at: string | null
          started_at: string | null
          status: string
          success_count: number
          total_contacts: number
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          config: Json
          contacts: Json
          created_at?: string
          current_index?: number
          error_count?: number
          error_details?: Json | null
          estimated_duration?: number | null
          execution_log?: Json | null
          id?: string
          job_name: string
          messages: Json
          next_execution_at?: string | null
          priority?: number
          scheduled_at?: string | null
          started_at?: string | null
          status?: string
          success_count?: number
          total_contacts?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          config?: Json
          contacts?: Json
          created_at?: string
          current_index?: number
          error_count?: number
          error_details?: Json | null
          estimated_duration?: number | null
          execution_log?: Json | null
          id?: string
          job_name?: string
          messages?: Json
          next_execution_at?: string | null
          priority?: number
          scheduled_at?: string | null
          started_at?: string | null
          status?: string
          success_count?: number
          total_contacts?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dispatch_progress: {
        Row: {
          contact_name: string | null
          contact_phone: string
          created_at: string
          error_message: string | null
          id: string
          instance_used: string | null
          job_id: string
          message_index: number
          response_data: Json | null
          retry_count: number
          sent_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          contact_name?: string | null
          contact_phone: string
          created_at?: string
          error_message?: string | null
          id?: string
          instance_used?: string | null
          job_id: string
          message_index: number
          response_data?: Json | null
          retry_count?: number
          sent_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          contact_name?: string | null
          contact_phone?: string
          created_at?: string
          error_message?: string | null
          id?: string
          instance_used?: string | null
          job_id?: string
          message_index?: number
          response_data?: Json | null
          retry_count?: number
          sent_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "dispatch_progress_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "dispatch_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      dispatch_queue_logs: {
        Row: {
          created_at: string
          id: string
          job_id: string | null
          log_level: string
          message: string
          metadata: Json | null
        }
        Insert: {
          created_at?: string
          id?: string
          job_id?: string | null
          log_level?: string
          message: string
          metadata?: Json | null
        }
        Update: {
          created_at?: string
          id?: string
          job_id?: string | null
          log_level?: string
          message?: string
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "dispatch_queue_logs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "dispatch_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      extrator_leads: {
        Row: {
          cidade: string
          created_at: string
          estado: string
          id: string
          quantidade: number | null
          termos_pesquisa: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cidade: string
          created_at?: string
          estado: string
          id?: string
          quantidade?: number | null
          termos_pesquisa?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cidade?: string
          created_at?: string
          estado?: string
          id?: string
          quantidade?: number | null
          termos_pesquisa?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      extrator_leads_dados: {
        Row: {
          cidade: string | null
          created_at: string
          email: string | null
          id: string
          nome: string
          request_id: string | null
          servicos: string | null
          telefone: string | null
          updated_at: string
          url_site: string | null
          user_id: string
        }
        Insert: {
          cidade?: string | null
          created_at?: string
          email?: string | null
          id?: string
          nome?: string
          request_id?: string | null
          servicos?: string | null
          telefone?: string | null
          updated_at?: string
          url_site?: string | null
          user_id: string
        }
        Update: {
          cidade?: string | null
          created_at?: string
          email?: string | null
          id?: string
          nome?: string
          request_id?: string | null
          servicos?: string | null
          telefone?: string | null
          updated_at?: string
          url_site?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "extrator_leads_dados_request_fk"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "extrator_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      instance_performance: {
        Row: {
          avg_speed: number
          created_at: string
          date: string
          id: string
          instance_name: string
          last_activity: string | null
          reliability_score: number
          status: string
          success_rate: number
          total_messages: number
          updated_at: string
          uptime_percentage: number
          user_id: string
        }
        Insert: {
          avg_speed?: number
          created_at?: string
          date?: string
          id?: string
          instance_name: string
          last_activity?: string | null
          reliability_score?: number
          status?: string
          success_rate?: number
          total_messages?: number
          updated_at?: string
          uptime_percentage?: number
          user_id: string
        }
        Update: {
          avg_speed?: number
          created_at?: string
          date?: string
          id?: string
          instance_name?: string
          last_activity?: string | null
          reliability_score?: number
          status?: string
          success_rate?: number
          total_messages?: number
          updated_at?: string
          uptime_percentage?: number
          user_id?: string
        }
        Relationships: []
      }
      message_metrics: {
        Row: {
          campaign_id: string | null
          created_at: string
          date: string
          hour: number
          id: string
          instance_name: string
          messages_failed: number
          messages_sent: number
          messages_success: number
          updated_at: string
          user_id: string
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string
          date?: string
          hour?: number
          id?: string
          instance_name: string
          messages_failed?: number
          messages_sent?: number
          messages_success?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          campaign_id?: string | null
          created_at?: string
          date?: string
          hour?: number
          id?: string
          instance_name?: string
          messages_failed?: number
          messages_sent?: number
          messages_success?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      n8n_chat_histories: {
        Row: {
          id: number
          message: Json
          session_id: string
          user_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
          user_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          location: string | null
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id: string
          location?: string | null
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          location?: string | null
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      status_post_instances: {
        Row: {
          created_at: string
          error: string | null
          id: string
          instance_name: string
          post_id: string
          sent_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          id?: string
          instance_name: string
          post_id: string
          sent_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error?: string | null
          id?: string
          instance_name?: string
          post_id?: string
          sent_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "status_post_instances_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "status_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      status_posts: {
        Row: {
          background_color: number
          created_at: string
          file_url: string | null
          font: number
          id: string
          last_error: string | null
          mimetype: string | null
          scheduled_at: string | null
          sent_at: string | null
          status: string
          text: string | null
          thumbnail_url: string | null
          title: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          background_color?: number
          created_at?: string
          file_url?: string | null
          font?: number
          id?: string
          last_error?: string | null
          mimetype?: string | null
          scheduled_at?: string | null
          sent_at?: string | null
          status?: string
          text?: string | null
          thumbnail_url?: string | null
          title?: string
          type?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          background_color?: number
          created_at?: string
          file_url?: string | null
          font?: number
          id?: string
          last_error?: string | null
          mimetype?: string | null
          scheduled_at?: string | null
          sent_at?: string | null
          status?: string
          text?: string | null
          thumbnail_url?: string | null
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      system_settings: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      system_updates: {
        Row: {
          author_id: string
          category: string | null
          content: string
          created_at: string
          id: string
          is_important: boolean
          published: boolean
          title: string
          updated_at: string
          version: string | null
        }
        Insert: {
          author_id: string
          category?: string | null
          content: string
          created_at?: string
          id?: string
          is_important?: boolean
          published?: boolean
          title: string
          updated_at?: string
          version?: string | null
        }
        Update: {
          author_id?: string
          category?: string | null
          content?: string
          created_at?: string
          id?: string
          is_important?: boolean
          published?: boolean
          title?: string
          updated_at?: string
          version?: string | null
        }
        Relationships: []
      }
      user_instances: {
        Row: {
          created_at: string
          id: string
          instance_name: string
          instance_token: string
          is_active: boolean
          uaz_instance_data: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          instance_name: string
          instance_token: string
          is_active?: boolean
          uaz_instance_data?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          instance_name?: string
          instance_token?: string
          is_active?: boolean
          uaz_instance_data?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_limits: {
        Row: {
          can_use_advanced_features: boolean
          created_at: string
          id: string
          is_active: boolean
          leads_extracted_count: number
          max_campaigns: number
          max_instances: number
          max_leads_extraction: number
          max_messages_per_day: number
          max_messages_per_month: number
          storage_limit_mb: number
          trial_days: number | null
          trial_start_date: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          can_use_advanced_features?: boolean
          created_at?: string
          id?: string
          is_active?: boolean
          leads_extracted_count?: number
          max_campaigns?: number
          max_instances?: number
          max_leads_extraction?: number
          max_messages_per_day?: number
          max_messages_per_month?: number
          storage_limit_mb?: number
          trial_days?: number | null
          trial_start_date?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          can_use_advanced_features?: boolean
          created_at?: string
          id?: string
          is_active?: boolean
          leads_extracted_count?: number
          max_campaigns?: number
          max_instances?: number
          max_leads_extraction?: number
          max_messages_per_day?: number
          max_messages_per_month?: number
          storage_limit_mb?: number
          trial_days?: number | null
          trial_start_date?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_permissions: {
        Row: {
          adicionar_contato_view: boolean
          agentes_ia_create: boolean
          agentes_ia_delete: boolean
          agentes_ia_edit: boolean
          agentes_ia_view: boolean
          aquecimento_configure: boolean
          aquecimento_view: boolean
          campanhas_analytics: boolean
          campanhas_create: boolean
          campanhas_view: boolean
          configuracoes_advanced: boolean
          configuracoes_view: boolean
          created_at: string
          dashboard_analytics: boolean
          dashboard_view: boolean
          disparo_bulk: boolean
          disparo_create: boolean
          disparo_view: boolean
          extrator_grupos_export: boolean
          extrator_grupos_view: boolean
          extrator_leads_export: boolean
          extrator_leads_view: boolean
          filtro_export: boolean
          filtro_import: boolean
          filtro_view: boolean
          id: string
          instancias_create: boolean
          instancias_delete: boolean
          instancias_view: boolean
          lista_contatos_create: boolean
          lista_contatos_delete: boolean
          lista_contatos_edit: boolean
          lista_contatos_view: boolean
          multi_atendimento_configure: boolean
          multi_atendimento_view: boolean
          perfil_edit: boolean
          perfil_view: boolean
          status_view: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          adicionar_contato_view?: boolean
          agentes_ia_create?: boolean
          agentes_ia_delete?: boolean
          agentes_ia_edit?: boolean
          agentes_ia_view?: boolean
          aquecimento_configure?: boolean
          aquecimento_view?: boolean
          campanhas_analytics?: boolean
          campanhas_create?: boolean
          campanhas_view?: boolean
          configuracoes_advanced?: boolean
          configuracoes_view?: boolean
          created_at?: string
          dashboard_analytics?: boolean
          dashboard_view?: boolean
          disparo_bulk?: boolean
          disparo_create?: boolean
          disparo_view?: boolean
          extrator_grupos_export?: boolean
          extrator_grupos_view?: boolean
          extrator_leads_export?: boolean
          extrator_leads_view?: boolean
          filtro_export?: boolean
          filtro_import?: boolean
          filtro_view?: boolean
          id?: string
          instancias_create?: boolean
          instancias_delete?: boolean
          instancias_view?: boolean
          lista_contatos_create?: boolean
          lista_contatos_delete?: boolean
          lista_contatos_edit?: boolean
          lista_contatos_view?: boolean
          multi_atendimento_configure?: boolean
          multi_atendimento_view?: boolean
          perfil_edit?: boolean
          perfil_view?: boolean
          status_view?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          adicionar_contato_view?: boolean
          agentes_ia_create?: boolean
          agentes_ia_delete?: boolean
          agentes_ia_edit?: boolean
          agentes_ia_view?: boolean
          aquecimento_configure?: boolean
          aquecimento_view?: boolean
          campanhas_analytics?: boolean
          campanhas_create?: boolean
          campanhas_view?: boolean
          configuracoes_advanced?: boolean
          configuracoes_view?: boolean
          created_at?: string
          dashboard_analytics?: boolean
          dashboard_view?: boolean
          disparo_bulk?: boolean
          disparo_create?: boolean
          disparo_view?: boolean
          extrator_grupos_export?: boolean
          extrator_grupos_view?: boolean
          extrator_leads_export?: boolean
          extrator_leads_view?: boolean
          filtro_export?: boolean
          filtro_import?: boolean
          filtro_view?: boolean
          id?: string
          instancias_create?: boolean
          instancias_delete?: boolean
          instancias_view?: boolean
          lista_contatos_create?: boolean
          lista_contatos_delete?: boolean
          lista_contatos_edit?: boolean
          lista_contatos_view?: boolean
          multi_atendimento_configure?: boolean
          multi_atendimento_view?: boolean
          perfil_edit?: boolean
          perfil_view?: boolean
          status_view?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_update_reads: {
        Row: {
          created_at: string
          id: string
          update_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          update_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          update_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_update_reads_update_id_fkey"
            columns: ["update_id"]
            isOneToOne: false
            referencedRelation: "system_updates"
            referencedColumns: ["id"]
          },
        ]
      }
      warming_messages: {
        Row: {
          api_response: Json | null
          created_at: string
          delivered_at: string | null
          error_message: string | null
          id: string
          message_text: string
          message_type: string
          metadata: Json | null
          pair_id: string
          receiver_instance_name: string
          receiver_number: string
          receiver_user_id: string
          response_time_ms: number | null
          sender_instance_name: string
          sender_number: string
          sender_user_id: string
          sent_at: string
          status: string
        }
        Insert: {
          api_response?: Json | null
          created_at?: string
          delivered_at?: string | null
          error_message?: string | null
          id?: string
          message_text: string
          message_type?: string
          metadata?: Json | null
          pair_id: string
          receiver_instance_name: string
          receiver_number: string
          receiver_user_id: string
          response_time_ms?: number | null
          sender_instance_name: string
          sender_number: string
          sender_user_id: string
          sent_at?: string
          status?: string
        }
        Update: {
          api_response?: Json | null
          created_at?: string
          delivered_at?: string | null
          error_message?: string | null
          id?: string
          message_text?: string
          message_type?: string
          metadata?: Json | null
          pair_id?: string
          receiver_instance_name?: string
          receiver_number?: string
          receiver_user_id?: string
          response_time_ms?: number | null
          sender_instance_name?: string
          sender_number?: string
          sender_user_id?: string
          sent_at?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "warming_messages_pair_id_fkey"
            columns: ["pair_id"]
            isOneToOne: false
            referencedRelation: "warming_pairs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "warming_messages_receiver_user_id_fkey"
            columns: ["receiver_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "warming_messages_sender_user_id_fkey"
            columns: ["sender_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      warming_pairs: {
        Row: {
          completed_at: string | null
          conversation_count: number
          created_at: string
          id: string
          instance_a_name: string
          instance_a_number: string
          instance_a_token: string
          instance_b_name: string
          instance_b_number: string
          instance_b_token: string
          last_message_at: string | null
          metadata: Json | null
          started_at: string
          status: string
          updated_at: string
          user_a_id: string
          user_b_id: string
        }
        Insert: {
          completed_at?: string | null
          conversation_count?: number
          created_at?: string
          id?: string
          instance_a_name: string
          instance_a_number: string
          instance_a_token: string
          instance_b_name: string
          instance_b_number: string
          instance_b_token: string
          last_message_at?: string | null
          metadata?: Json | null
          started_at?: string
          status?: string
          updated_at?: string
          user_a_id: string
          user_b_id: string
        }
        Update: {
          completed_at?: string | null
          conversation_count?: number
          created_at?: string
          id?: string
          instance_a_name?: string
          instance_a_number?: string
          instance_a_token?: string
          instance_b_name?: string
          instance_b_number?: string
          instance_b_token?: string
          last_message_at?: string | null
          metadata?: Json | null
          started_at?: string
          status?: string
          updated_at?: string
          user_a_id?: string
          user_b_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "warming_pairs_user_a_id_fkey"
            columns: ["user_a_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "warming_pairs_user_b_id_fkey"
            columns: ["user_b_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      warming_participants: {
        Row: {
          conversation_score: number | null
          id: string
          instance_name: string
          is_available_for_pairing: boolean
          last_activity_at: string | null
          pair_id: string | null
          started_at: string
          status: string
          total_messages_received: number
          total_messages_sent: number
          updated_at: string
          user_id: string
          whatsapp_number: string
        }
        Insert: {
          conversation_score?: number | null
          id?: string
          instance_name: string
          is_available_for_pairing?: boolean
          last_activity_at?: string | null
          pair_id?: string | null
          started_at?: string
          status?: string
          total_messages_received?: number
          total_messages_sent?: number
          updated_at?: string
          user_id: string
          whatsapp_number: string
        }
        Update: {
          conversation_score?: number | null
          id?: string
          instance_name?: string
          is_available_for_pairing?: boolean
          last_activity_at?: string | null
          pair_id?: string | null
          started_at?: string
          status?: string
          total_messages_received?: number
          total_messages_sent?: number
          updated_at?: string
          user_id?: string
          whatsapp_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "warming_participants_pair_id_fkey"
            columns: ["pair_id"]
            isOneToOne: false
            referencedRelation: "warming_pairs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_delete_user: { Args: { p_user_id: string }; Returns: undefined }
      create_warming_pair: {
        Args: {
          p_instance_a_name: string
          p_instance_a_number: string
          p_instance_a_token: string
          p_instance_b_name: string
          p_instance_b_number: string
          p_instance_b_token: string
          p_user_a_id: string
          p_user_b_id: string
        }
        Returns: string
      }
      get_active_warming_targets: {
        Args: never
        Returns: {
          instance_name: string
          whatsapp_number: string
        }[]
      }
      get_available_warming_participants: {
        Args: never
        Returns: {
          instance_name: string
          instance_token: string
          user_id: string
          whatsapp_number: string
        }[]
      }
      get_current_user_role: {
        Args: never
        Returns: Database["public"]["Enums"]["app_role"]
      }
      get_next_dispatch_job: {
        Args: never
        Returns: {
          config: Json
          contacts: Json
          current_index: number
          error_count: number
          job_id: string
          job_name: string
          messages: Json
          success_count: number
          user_id: string
        }[]
      }
      get_total_messages: { Args: never; Returns: number }
      get_user_metrics: {
        Args: { user_ids?: string[] }
        Returns: {
          instance_count: number
          messages_sent: number
          user_id: string
        }[]
      }
      get_user_trial_info: {
        Args: { user_uuid?: string }
        Returns: {
          days_remaining: number
          is_expired: boolean
          trial_days: number
          trial_start_date: string
        }[]
      }
      get_user_warming_instances: {
        Args: never
        Returns: {
          instance_name: string
          started_at: string
          status: string
          whatsapp_number: string
        }[]
      }
      get_warming_active_count: { Args: never; Returns: number }
      is_admin: { Args: { user_uuid?: string }; Returns: boolean }
      is_user_trial_expired: { Args: { user_uuid?: string }; Returns: boolean }
      match_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      record_message_metric: {
        Args: {
          campaign_id_param?: string
          instance_name_param: string
          success_param?: boolean
          user_id_param: string
        }
        Returns: undefined
      }
      update_dispatch_job_progress: {
        Args: {
          p_current_index: number
          p_error_count: number
          p_job_id: string
          p_next_execution_at?: string
          p_status?: string
          p_success_count: number
        }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
