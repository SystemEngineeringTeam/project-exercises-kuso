export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      crazy_score: {
        Row: {
          checked_user_uid: string;
          created_at: string;
          id: number;
          post_id: number;
          score: number;
          updated_at: string;
        };
        Insert: {
          checked_user_uid: string;
          created_at?: string;
          id?: number;
          post_id: number;
          score: number;
          updated_at?: string;
        };
        Update: {
          checked_user_uid?: string;
          created_at?: string;
          id?: number;
          post_id?: number;
          score?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'crazy_score_checked_user_uid_fkey';
            columns: ['checked_user_uid'];
            isOneToOne: false;
            referencedRelation: 'user';
            referencedColumns: ['uid'];
          },
          {
            foreignKeyName: 'crazy_score_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'post';
            referencedColumns: ['id'];
          },
        ];
      };
      language: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      post: {
        Row: {
          code: string;
          created_at: string;
          deleted_at: string | null;
          description: string;
          id: number;
          lang_id: number;
          title: string;
          user_uid: string;
        };
        Insert: {
          code: string;
          created_at?: string;
          deleted_at?: string | null;
          description: string;
          id?: number;
          lang_id: number;
          title: string;
          user_uid: string;
        };
        Update: {
          code?: string;
          created_at?: string;
          deleted_at?: string | null;
          description?: string;
          id?: number;
          lang_id?: number;
          title?: string;
          user_uid?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'post_lang_id_fkey';
            columns: ['lang_id'];
            isOneToOne: false;
            referencedRelation: 'language';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'post_user_uid_fkey';
            columns: ['user_uid'];
            isOneToOne: false;
            referencedRelation: 'user';
            referencedColumns: ['uid'];
          },
        ];
      };
      post_tag: {
        Row: {
          id: number;
          post_id: number;
          tag: string;
        };
        Insert: {
          id?: number;
          post_id: number;
          tag: string;
        };
        Update: {
          id?: number;
          post_id?: number;
          tag?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'post_tag_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'post';
            referencedColumns: ['id'];
          },
        ];
      };
      user: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          id: number;
          name: string;
          uid: string;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          name: string;
          uid?: string;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          name?: string;
          uid?: string;
        };
        Relationships: [];
      };
      z_favorite_animal: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          user: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          user: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          user?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'z_favorite_animal_user_fkey';
            columns: ['user'];
            isOneToOne: false;
            referencedRelation: 'z_user';
            referencedColumns: ['id'];
          },
        ];
      };
      z_user: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          uid: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          uid?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          uid?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
